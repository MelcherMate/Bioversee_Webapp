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
        <header>Welcome</header>
        <nav>&lt;menu&gt;</nav>
        <aside className="sidebar-left">&lt;aside&gt;</aside>
        <main>
          <Toggle name="warmWaterPump" label="Warm water pump" />
          <Toggle name="coldWaterPump" label="Cold water pump" />
          <Toggle name="acidPump" label="Acid pump" />
          <Toggle name="basePump" label="Base pump" />
          <Slider name="rotorSlider" label="Rotor" />
          <Slider name="aeratorSlider" label="Aerator" />
          <Display name="rotorDisplay" label="Rotor display" />
          <Display name="aeratorDisplay" label="Aerator display" />
          <Display name="tempDisplay" label="Temperature display" />
          <Display name="pHDisplay" label="pH display" />
          <Button name="tempCall" label="Temperature button" />
          <Button name="phCall" label="pH value button" />
        </main>
        <aside className="sidebar-right">&lt;aside&gt;</aside>
        <footer>Bioversee open-source software</footer>
      </div>
    </>
  );
}

export default App;
