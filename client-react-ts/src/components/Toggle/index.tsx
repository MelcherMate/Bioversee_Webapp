import { isUndefined } from "lodash";
import { useEffect, useState } from "react";
import "./Toggle.css";

function Toggle(props) {
  // States
  const [val, setVal] = useState(false);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Optional for loading state
  const [error, setError] = useState(null); // Optional for error state

  // Functions

  const getFirstObjectByName = (arr, nameToFind) => {
    return arr.find((obj) => obj.name === nameToFind);
  };

  useEffect(() => {
    if (!isUndefined(props.url) && !isUndefined(props.name)) {
      //console.log(import.meta.env.VITE_SERVER_BASE_URL + props.url);
      fetch(`${import.meta.env.VITE_SERVER_BASE_URL + props.url}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          //console.log(data);
          //console.log(data, props.name);
          const firstWithName = getFirstObjectByName(
            data.reverse(),
            props.name
          );
          //console.log(firstWithName);
          //console.log(firstWithName.state);
          setVal(firstWithName.state);
        })
        .catch((error) => console.log(error));
    }
  }, [props.url, props.name]);

  return (
    <>
      <div className="toggle">
        <input
          type="checkbox"
          checked={val}
          id={props.name}
          onChange={() => {
            setVal(!val);
          }}
        />
        <label htmlFor={props.name}></label>
        <span>{props.label}</span>
      </div>
    </>
  );
}

Toggle.displayName = "Toggle";
export default Toggle;
