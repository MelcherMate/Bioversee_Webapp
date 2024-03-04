from flask import Flask, request
import variables

app = Flask(__name__)

motor_state = 0
airpump_state = 0

@app.route("Fermenter\controll_codes\variables.py", methods=["POST"])
def handle_ajax_request():
    global motor_state, airpump_state
    motor_state = request.form.get("motorState")
    airpump_state = request.form.get("airpumpState")
    print("motorState value:", motor_state)
    print("airpumpState value:", airpump_state)
    
    variables.motor_state = motor_state
    variables.airpump_state = airpump_state

    return "AJAX request Successfully"

if __name__ == "__main__":
    app.run()