import { useState } from "react";
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
        <main className="mainGrid">
          <div className="switchContainer">
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
          <div className="sliderContainer">
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
          <div className="buttonContainer">
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
          </div>
        </main>
        <footer>Bioversee open-source software</footer>
      </div>
    </>
  );
}

export default App;
