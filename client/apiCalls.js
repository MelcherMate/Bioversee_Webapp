// Function to fetch actuator state from server
const addActuatorState = async (val) => {
  var output = document.getElementById("output");

  // Define the URL of the API endpoint
  const url = "/api/v1/actuator/addactuator";

  // Prepare the dataRotor to be added (usually in JSON format)
  const data = {
    name: "rotor",
    state: val,
  };

  // Make the POST request
  fetch("http://localhost:4321" + url, {
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

// Fetch motor and airpump states when the page loads
window.onload = function () {
  var slider = document.getElementById("myRange");
  var output = document.getElementById("output");
  output.value = slider.value;

  slider.oninput = function () {
    output.value = this.value;
    addActuatorState(this.value);
  };
};
