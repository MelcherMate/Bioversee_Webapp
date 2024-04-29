import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Display from "./components/Display";
import Slider from "./components/Slider";
import Toggle from "./components/Toggle";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="grid">
        <header>Bioversee</header>
        <main>
          <Toggle
            name="switchWarmWaterPump"
            label="Warm water pump"
            url="/api/v1/actuator/getswitchesactuators"
          />
          <Toggle
            name="switchColdWaterPump"
            label="Cold water pump"
            url="/api/v1/actuator/getswitchesactuators"
          />
          <Toggle
            name="switchAcidPump"
            label="Acid pump"
            url="/api/v1/actuator/getswitchesactuators"
          />
          <Toggle
            name="switchBasePump"
            label="Base pump"
            url="/api/v1/actuator/getswitchesactuators"
          />
          <Display
            name="rotorDisplay"
            label="Rotor display" //value="0"
          />
          <Display
            name="aeratorDisplay"
            label="Aerator display" //value="0"
          />
          <Slider name="rotorSlider" label="Rotor" />
          <Slider name="aeratorSlider" label="Aerator" />
          <Display
            name="tempDisplay"
            label="Temperature display" //value="0"
          />
          <Display
            name="pHDisplay"
            label="pH display" //value="0"
          />
          <Button name="tempCall" label="Temperature button" />
          <Button name="phCall" label="pH value button" />
        </main>
        <footer>Bioversee open-source software</footer>
      </div>
    </>
  );
}

export default App;
