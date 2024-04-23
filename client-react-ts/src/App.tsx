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
      <Toggle />
      <Toggle />
      <Toggle />
      <Toggle />
      <Slider />
      <Slider />
      <Display />
      <Display />
      <Button />
      <Button />
    </>
  );
}

export default App;
