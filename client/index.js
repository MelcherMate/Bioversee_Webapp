var motorState = 0;
var airpumpState = 0;

/*
//
$(document).ready(function() {
    // Inicialize: motorState from server
    $.get("/api/motorState", function(data) {
        motorState = data.motorState;
        updateMotorButton();
    });

    // Inicialize: airpumpState from server
    $.get("/api/airpumpState", function(data) {
        airpumpState = data.airpumpState;
        updateAirpumpButton();
    });
});
*/

// Function to update motor button style
function updateMotorButton() {
    var motorButton = document.getElementById("motorButton");
    if (motorState === 1) {
        motorButton.classList.add("green"); 
    } else {
        motorButton.classList.remove("green");
    }
}

// Function to update airpump button style
function updateAirpumpButton() {
    var airpumpButton = document.getElementById("airpumpButton");
    if (airpumpState === 1) {
        airpumpButton.classList.add("green"); 
    } else {
        airpumpButton.classList.remove("green");
    }
}
//#############################################################//
// Function to toggle motorState
function toggleMotorState() {
    if (motorState === 0) {
        motorState = 1;
    } else {
        motorState = 0;
    }
    console.log("motorState value: " + motorState);
    
    updateMotorButton();
    sendMotorAjaxRequest();
}

// Function to toggle airpumpState
function toggleAirpumpState(){
    if (airpumpState == 0){
        airpumpState = 1;
    } else {
        airpumpState = 0;
    }
    console.log("airpumpState value: " + airpumpState)

    updateAirpumpButton(); 
    sendAirpumpAjaxRequest();
}