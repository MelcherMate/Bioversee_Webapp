var motorState = 0;

function toggleMotorState() {
    if (motorState === 0) {
        motorState = 1;
    } else {
        motorState = 0;
    }
    console.log("motorState value: " + motorState);
    
    var footerTable = document.getElementById("footerTable");
    if (motorState === 1) {
        footerTable.classList.add("green"); 
    } else {
        footerTable.classList.remove("green");
    }
}

var airpumpState = 0;

function toggleAirpumpState(){
    if (airpumpState == 0){
        airpumpState = 1;
    } else {
        airpumpState = 0;
    }
    console.log("airpumpState value: " + airpumpState)

    var footerTable = document.getElementById("footerTable");
    if (airpumpState === 1) {
        footerTable.classList.add("yellow"); 
    } else {
        footerTable.classList.remove("yellow");
    }
}

$.ajax({
    type: "POST",
    url: "C:\Users\melch\OneDrive\Documents\Programming\Project_fermentor\Fermenter\online_data_pull.py",
    data: { motorState: motorState,
            airpumpState: airpumpState
    },
    success: function(response) {
        console.log("AJAX sent Successfully");
    },
    error: function(xhr, status, error) {
        console.error("Error sendig AJAX", error);
    }
});