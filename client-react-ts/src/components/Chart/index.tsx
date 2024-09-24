import { isEmpty, isUndefined } from "lodash";
import React, { useEffect, useRef, useState } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./Chart.css";

interface ChartProps {
  name: string;
  label: string;
  url: string;
}

const Chart: React.FC<ChartProps> = (props) => {
  const [data, setData] = useState<any[]>([]);
  const [formattedData, setFormattedData] = useState<any[]>([]);
  const [minValue, setMinValue] = useState<number>(0);
  const [maxValue, setMaxValue] = useState<number>(35);
  const chartRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>(0);

  // Function to get sensor value from database
  const fetchData = () => {
    if (!isUndefined(props.url) && !isUndefined(props.name)) {
      fetch(`${process.env.VITE_SERVER_URL + props.url}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response error");
          }
          return response.json();
        })
        .then((data) => {
          setData(data);
        })
        .catch((error) => console.error("Fetch error:", error));
    }
  };

  useEffect(() => {
    // Initial fetch
    fetchData();

    // Fetch data every 5 seconds
    const interval = setInterval(fetchData, 5000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [props.url, props.name]);

  // Function to format sensor data for the chart
  useEffect(() => {
    if (!isEmpty(data)) {
      // Filter data by props.name
      const filteredData = data.filter((item: any) => item.name === props.name);

      // Select the last 6 data points
      const lastSixData = filteredData.slice(-6);

      // Prepare data for the chart (selecting only 'name' and 'pv' fields)
      const chartData = lastSixData.map((item) => ({
        time: reduceTimestampLength(item.createdAt), // X-axis
        [props.name]: item.value, // Y-axis
      }));

      // Find min and max values
      const values = filteredData.map((item: any) => item.value);
      const min = Math.min(...values);
      const max = Math.max(...values);

      // Calculate margin (e.g., 20% of the range)
      const margin = (max - min) * 0.2;

      // Ensure min and max are integers
      setMinValue(Math.floor(min - margin));
      setMaxValue(Math.ceil(max + margin));

      setFormattedData(chartData);
    }
  }, [data, props.name]);

  // Function to reduce timestamp length to "HH:mm" format
  const reduceTimestampLength = (timestamp: string) => {
    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours}:${minutes < 10 ? "0" + minutes : minutes}`;
  };

  // Set chart width based on parent div's width
  useEffect(() => {
    const updateWidth = () => {
      if (chartRef.current) {
        setWidth(chartRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  // Formatter function to ensure Y-axis labels are integers
  const tickFormatter = (value: number) => {
    return Math.round(value).toString();
  };

  return (
    <div ref={chartRef} style={{ width: "100%" }}>
      <h3 id="title">{props.label}</h3>
      {width > 0 && (
        <LineChart
          width={width}
          height={200}
          data={formattedData}
          margin={{
            top: 0,
            right: 10,
            left: -15,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis domain={[minValue, maxValue]} tickFormatter={tickFormatter} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey={props.name}
            stroke="#8884d8"
            activeDot={{ r: 8 }}
            isAnimationActive={true}
          />
        </LineChart>
      )}
    </div>
  );
};

export default Chart;
