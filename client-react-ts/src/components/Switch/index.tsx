import { isUndefined } from "lodash";
import { useEffect } from "react";
import "./Switch.css";

function Switch(props: any) {
  // States
  // const [val, setVal] = useState(false);

  // Functions
  // Function to get state value database
  const getFirstObjectByName = (arr: any, nameToFind: any) => {
    return arr.find((obj: any) => obj.name === nameToFind);
  };

  useEffect(() => {
    if (!isUndefined(props.url) && !isUndefined(props.name)) {
      // console.log(process.env.VITE_SERVER_URL);
      fetch(`${process.env.VITE_SERVER_URL + props.url}`, {
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
          props.setVal(firstWithName.state);
        })
        .catch((error) => console.log(error));
    }
  }, [props.url, props.name, props]);

  // Function send new state value to the database
  const sendSwitchStateToDatabase = (newValue: boolean) => {
    const data = {
      name: props.name,
      state: newValue,
    };
    fetch(`${process.env.VITE_SERVER_URL + props.updateUrl}`, {
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
          checked={props.val}
          id={props.name}
          onChange={(event) => {
            const newValue = event.target.checked;
            props.setVal(newValue);
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
