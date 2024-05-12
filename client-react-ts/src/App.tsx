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
          <aside>
            <div className="switchBox">
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
            </div>
            <div className="sliderBox">
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
            </div>
          </aside>
          <main>
            <div className="reactorBox">bioreactor</div>
          </main>
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
                  name: "8:00:00",
                  pv: 22,
                },
                {
                  name: "8:01:00",
                  pv: 22.4,
                },
                {
                  name: "8:02:00",
                  pv: 18.9,
                },
                {
                  name: "8:03:00",
                  pv: 19.9,
                },
                {
                  name: "8:04:00",
                  pv: 21.4,
                },
                {
                  name: "8:05:00",
                  pv: 23.5,
                },
                {
                  name: "8:06:00",
                  pv: 24.1,
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
        <footer>
          <div className="footerCopy">
            <p>
              &copy; 2024 Bioversee <br></br>All rights reserved
            </p>
          </div>
          <div className="footerLinkedin">
            <a
              href="https://www.linkedin.com/in/mate-melcher-5a16601bb/"
              target="_blank"
              rel="noopener noreferrer"
            >
              About me
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
