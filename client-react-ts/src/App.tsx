import { useState } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import "./App.css";
import Button from "./components/Button";
import Slider from "./components/Slider";
import Switch from "./components/Switch";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="grid">
        <header>Bioversee</header>
        <div className="container">
          <nav>
            <Switch
              name="switchWarmWaterPump"
              label="Warm water pump"
              url="/api/v1/actuator/getswitchesactuators"
              updateUrl="/api/v1/actuator/postswitchactuator"
            />
            <Switch
              name="switchColdWaterPump"
              label="Cold water pump"
              url="/api/v1/actuator/getswitchesactuators"
              updateUrl="/api/v1/actuator/postswitchactuator"
            />
            <Switch
              name="switchAcidPump"
              label="Acid pump"
              url="/api/v1/actuator/getswitchesactuators"
              updateUrl="/api/v1/actuator/postswitchactuator"
            />
            <Switch
              name="switchBasePump"
              label="Base pump"
              url="/api/v1/actuator/getswitchesactuators"
              updateUrl="/api/v1/actuator/postswitchactuator"
            />
            <Slider
              name="rotor"
              label="Rotor"
              url="/api/v1/actuator/getslideractuators"
              updateUrl="/api/v1/actuator/postslideractuator"
            />
            <Slider
              name="aerator"
              label="Aerator"
              url="/api/v1/actuator/getslideractuators"
              updateUrl="/api/v1/actuator/postslideractuator"
            />
          </nav>
          <main>Hello main</main>
          <aside>
            <Button
              name="temperature"
              label="Temperature button"
              url="/api/v1/sensor/getsensordata"
            />
            <Button
              name="ph"
              label="pH value button"
              url="/api/v1/sensor/getsensordata"
            />
            <LineChart
              width={200}
              height={200}
              data={[
                {
                  name: "Page A",
                  pv: 2400,
                  amt: 2400,
                },
                {
                  name: "Page B",
                  pv: 1398,
                  amt: 2210,
                },
                {
                  name: "Page C",
                  pv: 9800,
                  amt: 2290,
                },
                {
                  name: "Page D",
                  pv: 3908,
                  amt: 2000,
                },
                {
                  name: "Page E",
                  pv: 4800,
                  amt: 2181,
                },
                {
                  name: "Page F",
                  pv: 3800,
                  amt: 2500,
                },
                {
                  name: "Page G",
                  pv: 4300,
                  amt: 2100,
                },
              ]}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </aside>
        </div>
        <footer>Bioversee open-source software</footer>
      </div>
    </>
  );
}

export default App;
