import { isUndefined } from "lodash";
import { useEffect, useState } from "react";
import "./Switch.css";

function Switch(props) {
  // States
  const [val, setVal] = useState(false);
  const [data, setData] = useState([]); // Optional for set Data
  const [isLoading, setIsLoading] = useState(false); // Optional for loading state
  const [error, setError] = useState(null); // Optional for error state

  // Functions
  // Function to get state value database
  const getFirstObjectByName = (arr, nameToFind) => {
    return arr.find((obj) => obj.name === nameToFind);
  };

  useEffect(() => {
    if (!isUndefined(props.url) && !isUndefined(props.name)) {
      fetch(`${import.meta.env.VITE_SERVER_BASE_URL + props.url}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          const firstWithName = getFirstObjectByName(
            data.reverse(),
            props.name
          );
          setVal(firstWithName.state);
        })
        .catch((error) => console.log(error));
    }
  }, [props.url, props.name]);

  // Function send new state value to the database
  const sendSwitchStateToDatabase = (newValue) => {
    const data = { name: props.name, state: newValue };
    fetch(`${import.meta.env.VITE_SERVER_BASE_URL + props.updateUrl}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Data sent to the database:", data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="switch">
        <input
          type="checkbox"
          checked={val}
          id={props.name}
          onChange={(event) => {
            const newValue = event.target.checked;
            setVal(newValue);
            sendSwitchStateToDatabase(newValue);
          }}
        />
        <label htmlFor={props.name}></label>
        <span>{props.label}</span>
      </div>
    </>
  );
}

Switch.displayName = "Switch";
export default Switch;
