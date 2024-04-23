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
          <Toggle name="warmWaterPump" label="Warm water pump" />
          <Toggle name="coldWaterPump" label="Cold water pump" />
          <Toggle name="acidPump" label="Acid pump" />
          <Toggle name="basePump" label="Base pump" />
          <Display name="rotorDisplay" label="Rotor display" value="0" />
          <Display name="aeratorDisplay" label="Aerator display" value="0" />
          <Slider name="rotorSlider" label="Rotor" />
          <Slider name="aeratorSlider" label="Aerator" />
          <Display name="tempDisplay" label="Temperature display" value="0" />
          <Display name="pHDisplay" label="pH display" value="0" />
          <Button name="tempCall" label="Temperature button" />
          <Button name="phCall" label="pH value button" />
        </main>
        <footer>Bioversee open-source software</footer>
      </div>
    </>
  );
}

export default App;
