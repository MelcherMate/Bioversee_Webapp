import { isUndefined } from "lodash";
import { useEffect, useState } from "react";
import "./Slider.css";

function Slider(props: any) {
  const { user } = props; // Destructure user from props
  const [isSliding, setIsSliding] = useState(false); // Track if the user is sliding

  // Functions
  const getFirstObjectByName = (arr: any, nameToFind: any) => {
    return arr.find((obj: any) => obj.name === nameToFind);
  };

  useEffect(() => {
    if (!isUndefined(props.url) && !isSliding) {
      // Prevent fetching value while sliding
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
  }, [props.url, props.name, props, user, isSliding]);

  // Update the value when the slider is moved
  const handleChange = (event: any) => {
    const newValue = parseInt(event.target.value, 10);
    props.setVal(newValue);
    setIsSliding(true); // Indicate the user is actively sliding
  };

  // Send the slider value to the database when the user releases the mouse
  const handleMouseUp = (event: any) => {
    const newValue = parseInt(event.target.value, 10);
    setIsSliding(false); // Indicate the user has stopped sliding
    sendSliderValueToDatabase(newValue); // Send the value to the database
  };

  // Function to send the value to the database
  const sendSliderValueToDatabase = (newValue: any) => {
    const data = {
      name: props.name,
      state: newValue,
      userId: user.id, // Send userId as well
    };

    console.log("Data being sent to the server:", data); // Log the data

    fetch(`${process.env.VITE_SERVER_URL + props.updateUrl}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data }),
    })
      .then((response) => response.json())
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="slider">
        <input
          type="range"
          min={props.min || 0}
          max={props.max || 100}
          value={props.val}
          onChange={handleChange} // Updates the slider UI value
          onMouseUp={handleMouseUp} // Sends value to DB when mouse is released
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
