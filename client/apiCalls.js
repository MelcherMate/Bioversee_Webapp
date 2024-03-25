// Function to fetch actuator states from server
const getActuatorStates = async () => {
  try {
    // Define the URL of the API endpoint
    const url = "/api/v1/actuator/getactuators";

    // Make the GET request
    const response = await fetch(url);

    // Check for successful response status
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Parse the JSON response
    const actuators = await response.json();

    // Handle the retrieved actuators
    console.log("Retrieved actuators:", actuators.reverse());
  } catch (error) {
    console.error("Error fetching actuators:", error);
  }
};

// Function to avoid func called to often
const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

// Function to add an actuator state to the server
const addActuatorState = async (val) => {
  var output = document.getElementById("output");

  // Define the URL of the API endpoint
  const url = "/api/v1/actuator/addactuator";

  // Prepare the data to be added (usually in JSON format)
  const data = {
    name: "rotor",
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

// Function to set initial actuator states
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
      const firstActuatorState = actuators[0].state;
      const slider = document.getElementById("myRange");
      const output = document.getElementById("output");
      output.value = firstActuatorState;
      slider.value = firstActuatorState;
    }
  } catch (error) {
    console.error("Error setting actuator states:", error);
  }
};

// Fetch actuator states when the page loads
window.onload = function () {
  var slider = document.getElementById("myRange");
  var output = document.getElementById("output");
  output.value = slider.value;

  slider.oninput = function () {
    output.value = this.value;
    debouncedAddActuatorState(this.value);
  };

  // Fetch actuator states
  setActuatorStates();
};
