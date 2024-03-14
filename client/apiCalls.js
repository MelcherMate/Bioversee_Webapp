// Function to fetch actuator state from server
const patchActuatorState = async () => {
    // Define the URL of the API endpoint
    const url = '/api/v1/actuator/patchactuator';

    // Prepare the dataRotor to be patched (usually in JSON format)
    const data = {
        _id: "65f320219d7a50a4e56bdd0a",
        state: false
    };

    // Make the PATCH request
    fetch('http://localhost:4321' + url, {
        method: 'PATCH',
        headers: {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
            },
        body: JSON.stringify({data}) // Convert data to JSON string
        })
        .then(response => {
            // Check for successful response status before parsing as JSON
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        // Now parse the JSON response
        .then(patchedData => {
            // Handle the patched data here (e.g., update UI)
            console.log('Data patched successfully:', patchedData);
        })
        .catch(error => {
            console.error('Error patching data:', error);
        });
}

// Fetch motor and airpump states when the page loads
window.onload = function() {
    patchActuatorState();
};