import { useState } from "react";
import "./Switch.css";

function SwitchTest(props) {
  // States
  const [val, setVal] = useState(props.val);

  return (
    <>
      <div className="switch">
        <input
          type="checkbox"
          checked={val}
          id={props.name}
          onChange={(event) => {
            // sendSwitchStateToDatabase(newValue);
          }}
        />
        <label htmlFor={props.name}></label>
        <span>{props.label}</span>
      </div>
    </>
  );
}

SwitchTest.displayName = "SwitchTest";
export default SwitchTest;
