var motorState = false;
var airpumpState = false;

// Function to update motor button style
function updateMotorButton() {
    var motorButton = document.getElementById("motorButton");
    if (motorState === true) {
        motorButton.classList.add("green"); 
    } else {
        motorButton.classList.remove("green");
    }
}

// Function to update airpump button style
function updateAirpumpButton() {
    var airpumpButton = document.getElementById("airpumpButton");
    if (airpumpState === true) {
        airpumpButton.classList.add("green"); 
    } else {
        airpumpButton.classList.remove("green");
    }
}
// Function to toggle motorState
function toggleMotorState() {
    if (motorState === false) {
        motorState = true;
    } else {
        motorState = false;
    }
    console.log("motorState value: " + motorState);
    
    updateMotorButton();
}

// Function to toggle airpumpState
function toggleAirpumpState(){
    if (airpumpState == false){
        airpumpState = true;
    } else {
        airpumpState = false;
    }
    console.log("airpumpState value: " + airpumpState)

    updateAirpumpButton(); 
}