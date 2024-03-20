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

// Function to fetch actuator state from server
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

// Fetch actuator states when the page loads
window.onload = function () {
  var slider = document.getElementById("myRange");
  var output = document.getElementById("output");
  output.value = slider.value;

  slider.oninput = function () {
    output.value = this.value;
    addActuatorState(this.value);
  };

  // Fetch actuator states
  getActuatorStates();
};
