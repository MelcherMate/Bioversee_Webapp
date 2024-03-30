import { debounce } from "./utils/debounce.js";

//------------------------------------------------//
// Function to set initial actuator states from database
const setActuatorStates = async () => {
  try {
    // Fetch actuator states from the server
    const response = await fetch("/api/v1/actuator/getactuators");

    // Check for successful response status
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Parse the JSON response
    let actuators = await response.json();

    // Reverse the order of actuators
    actuators = actuators.reverse();

    // Handle the retrieved actuators
    console.log("Retrieved actuators:", actuators);

    // Set the initial value of the slider to the state of the first actuator
    if (actuators.length > 0) {
      // Find the first actuator for rotor and aerator respectively
      const rotorActuator = actuators.find(
        (actuator) => actuator.name === "rotor"
      );
      const aeratorActuator = actuators.find(
        (actuator) => actuator.name === "aerator"
      );

      // Set initial values for rotor slider and display
      if (rotorActuator) {
        const rotorSlider = document.getElementById("sliderRotor");
        const rotorOutput = document.getElementById("displayRotor");
        rotorOutput.value = rotorActuator.state;
        rotorSlider.value = rotorActuator.state;
      }

      // Set initial values for aerator slider and display
      if (aeratorActuator) {
        const aeratorSlider = document.getElementById("sliderAerator");
        const aeratorOutput = document.getElementById("displayAerator");
        aeratorOutput.value = aeratorActuator.state;
        aeratorSlider.value = aeratorActuator.state;
      }
    }
  } catch (error) {
    console.error("Error setting actuator states:", error);
  }
};

//------------------------------------------------//
// Function to send actuator state to database
const addActuatorState = async (val, name) => {
  var output;
  if (name === "rotor") {
    output = document.getElementById("displayRotor");
  } else if (name === "aerator") {
    output = document.getElementById("displayAerator");
  }

  // Define the URL of the API endpoint
  const url = "/api/v1/actuator/addactuator";

  // Prepare the data to be added (usually in JSON format)
  const data = {
    name: name,
    state: val,
  };

  // Make the POST request
  fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data }), // Convert data to JSON string
  })
    .then((response) => {
      // Check for successful response status before parsing as JSON
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    // Now parse the JSON response
    .then((addedData) => {
      // Handle the added data here (e.g., update UI)
      console.log("Data added successfully:", addedData);
    })
    .catch((error) => {
      console.error("Error adding data:", error);
    });
};

// Debounce the addActuatorState function with a delay of 500 milliseconds
const debouncedAddActuatorState = debounce(addActuatorState, 500);

//------------------------------------------------//
//------------------------------------------------//
// Fetch actuator states when the page loads
window.onload = function () {
  // Set up rotor slider and display
  var sliderRotor = document.getElementById("sliderRotor");
  var outputRotor = document.getElementById("displayRotor");
  outputRotor.value = sliderRotor.value;

  sliderRotor.oninput = function () {
    outputRotor.value = this.value;
    debouncedAddActuatorState(this.value, "rotor");
  };

  // Set up aerator slider and display
  var sliderAerator = document.getElementById("sliderAerator");
  var outputAerator = document.getElementById("displayAerator");
  outputAerator.value = sliderAerator.value;

  sliderAerator.oninput = function () {
    outputAerator.value = this.value;
    debouncedAddActuatorState(this.value, "aerator");
  };

  setActuatorStates();
};
