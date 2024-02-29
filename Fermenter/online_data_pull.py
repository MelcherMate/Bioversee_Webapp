from flask import Flask, request

app = Flask(__name__)

@app.route("/path/to/your/python/endpoint", methods=["POST"])
def handle_ajax_request():
    motor_state = request.form.get("motorState")
    airpump_state = request.form.get("airpumpState")
    print("motorState value:", motor_state)
    print("airpumpState value:", airpump_state)
    return "AJAX request Successfully"

if __name__ == "__main__":
    app.run()
