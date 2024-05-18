import { useState } from "react";
import "./App.css";
import { Canvas } from "./components/Bioreactor/Canvas";
import Button from "./components/Button";
import Chart from "./components/Chart/index";
import Slider from "./components/Slider";
import Switch from "./components/Switch";

function App() {
  const [count, setCount] = useState(0);
  const [cards, setCards] = useState<Card[]>([
    { id: "Hello", coordinates: { x: 0, y: 0 }, text: "Bioreactor" },
  ]);

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
            <div className="reactorBox">
              <Canvas cards={cards} setCards={setCards} />
            </div>
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
            <Chart
              name="temperature"
              label="Temperature LineChart"
              url="/api/v1/sensor/getsensordata"
            />
            <Chart
              name="ph"
              label="pH value LineChart"
              url="/api/v1/sensor/getsensordata"
            />
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
            <br></br>
            <a
              href="https://github.com/MelcherMate"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
