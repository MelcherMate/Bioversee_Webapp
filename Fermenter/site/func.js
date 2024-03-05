var motorState = 0;

function toggleMotorState() {
    if (motorState === 0) {
        motorState = 1;
    } else {
        motorState = 0;
    }
    console.log("motorState value: " + motorState);
    
    var motorButton = document.getElementById("motorButton");
    if (motorState === 1) {
        motorButton.classList.add("green"); 
    } else {
        motorButton.classList.remove("green");
    }
    sendAjaxRequestMotor();
}

var airpumpState = 0;

function toggleAirpumpState(){
    if (airpumpState == 0){
        airpumpState = 1;
    } else {
        airpumpState = 0;
    }
    console.log("airpumpState value: " + airpumpState)

    var airpumpButton = document.getElementById("airpumpButton");
    if (airpumpState === 1) {
        airpumpButton.classList.add("green"); 
    } else {
        airpumpButton.classList.remove("green");
    }
    sendAjaxRequestAirpump();
}

function sendAjaxRequestMotor() {
    $.ajax({
        type: "POST",
        url: "http://127.0.0.1:5000/Fermenter/data_transfer/data_pull/online_data_pull",
        data: { motorState: motorState,
        },
        success: function(response) {
            console.log("AJAX sent Successfully");
        },
        error: function(xhr, status, error) {
            console.error("Error sending AJAX", error);
        }
    });
}

function sendAjaxRequestAirpump() {
    $.ajax({
        type: "POST",
        url: "http://127.0.0.1:5000/Fermenter/data_transfer/data_pull/online_data_pull",
        data: { airpumpState: airpumpState,
        },
        success: function(response) {
            console.log("AJAX sent Successfully");
        },
        error: function(xhr, status, error) {
            console.error("Error sending AJAX", error);
        }
    });
}