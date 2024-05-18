import React from "react";
import {
  CartesianGrid,
  Legend,
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
  const data = [
    { time: "8:00:00", pv: 22.1 },
    { time: "8:01:00", pv: 22.4 },
    { time: "8:02:00", pv: 18.9 },
    { time: "8:03:00", pv: 19.9 },
    { time: "8:04:00", pv: 21.4 },
    { time: "8:05:00", pv: 23.5 },
    { time: "8:06:00", pv: 24.1 },
  ];

  return (
    <div className="chartContainer">
      <h2 id="title">{props.label}</h2>
      <LineChart
        width={200}
        height={200}
        data={data}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </div>
  );
};

export default Chart;
