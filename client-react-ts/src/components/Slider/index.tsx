import { isUndefined } from "lodash";
import debounce from "lodash/debounce";
import { useEffect } from "react";
import "./Slider.css";

function Slider(props: any) {
  // States
  // const [val, setVal] = useState(0);

  // Functions
  // Function to get state value database
  const getFirstObjectByName = (arr: any, nameToFind: any) => {
    return arr.find((obj: any) => obj.name === nameToFind);
  };

  useEffect(() => {
    if (!isUndefined(props.url) && !isUndefined(props.name)) {
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

  // Update the value when the slider is moved
  const handleChange = (event: any) => {
    const newValue = parseInt(event.target.value, 10);
    props.setVal(newValue);
    debouncedSendSliderValueToDatabase(newValue);
  };

  // Function to send the value to the database
  const sendSliderValueToDatabase = (newValue: any) => {
    const data = { name: props.name, state: newValue }; // Modification here
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

  // Create a debounced version of the sendSliderValueToDatabase function
  const debouncedSendSliderValueToDatabase = debounce(
    sendSliderValueToDatabase,
    500
  );

  return (
    <>
      <div className="slider">
        <input
          type="range"
          min={props.min || 0}
          max={props.max || 100}
          value={props.val}
          onChange={handleChange}
          className="slider"
          id={props.name}
        />
        <span className="sliderValue">{props.val}%</span>
        <span>{props.label}</span>
      </div>
    </>
  );
}

Slider.displayName = "Slider";
export default Slider;
