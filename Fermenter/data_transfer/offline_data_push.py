from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient
from datetime import datetime

app = Flask(__name__)
CORS(app)

# MongoDB client
client = MongoClient('localhost', 27017)
db = client['Fermenter']
motor_log = db['Motor_log']
airpump_log = db['Airpump_log']

# Motor data push
@app.route('/Fermenter/data_transfer/offline_motor_data_push', methods=['POST'])
def offline_motor_data_push():
    if request.method == 'POST':
        motorState = request.form.get('motorState')
        current_time = datetime.now()

        if motorState is not None:
            motor_log.insert_one({'motorState': motorState, 'timestamp': current_time})

        response_data = {
            'motorState': motorState,
            'timestamp': current_time.strftime("%Y-%m-%d %H:%M:%S")
        }
        return jsonify(response_data)
    else:
        return jsonify({'error': 'Method not allowed'}), 405

# Airpump data push
@app.route('/Fermenter/data_transfer/offline_airpump_data_push', methods=['POST'])
def offline_airpump_data_push():
    if request.method == 'POST':
        airpumpState = request.form.get('airpumpState')
        current_time = datetime.now()

        if airpumpState is not None:
            airpump_log.insert_one({'airpumpState': airpumpState, 'timestamp': current_time})

        response_data = {
            'airpumpState': airpumpState,
            'timestamp': current_time.strftime("%Y-%m-%d %H:%M:%S")
        }
        return jsonify(response_data)
    else:
        return jsonify({'error': 'Method not allowed'}), 405

if __name__ == '__main__':
    app.run(debug=True)

