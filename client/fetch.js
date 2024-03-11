const url = 'http://localhost:5000'; // A szerver URL-je

const motorId = '65ef1545f44e31be2bd0c32b';
const airpumpId = '65ef19298f2ca52a25342e46';

// Function to fetch motor state from server
function fetchMotorState() {
    fetch(`${url}/Fermenter/backend/server/motorState`)
        .then(response => response.json())
        .then(data => {
            console.log('Motor state:', data);
        })
        .catch(error => {
            console.error('Error fetching motor state:', error);
        });
}

// Function to fetch airpump state from server
function fetchAirpumpState() {
    fetch(`${url}/Fermenter/backend/server/airpumpState`)
        .then(response => response.json())
        .then(data => {
            console.log('Airpump state:', data);
        })
        .catch(error => {
            console.error('Error fetching airpump state:', error);
        });
}

// Fetch motor and airpump states when the page loads
window.onload = function() {
    fetchMotorState();
    fetchAirpumpState();
};