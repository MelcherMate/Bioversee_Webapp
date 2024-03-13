const url = 'http://localhost:4321';

const motorId = '65ef1545f44e31be2bd0c32b';

// Function to fetch motor state from server
function fetchMotorState() {
    fetch(`${url}/fermenter/backend/server/motorState`)
        .then(response => response.json())
        .then(data => {
            console.log('Motor state:', data);
        })
        .catch(error => {
            console.error('Error fetching motor state:', error);
        });
}


// Fetch motor and airpump states when the page loads
window.onload = function() {
    fetchMotorState();
};