from flask import Flask, request, make_response, jsonify
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

# flask functions
@app.route('/Fermenter/data_transfer/online_data_pull_motor', methods=['POST'])
def online_data_pull_motor():
    if request.method == 'POST':
        motorState = request.form['motorState']
        current_time = datetime.now()
        motor_log.insert_one({'motorState': motorState, 'timestamp': current_time})
        
        response_data = {
            'motorState': motorState,
            'timestamp': current_time.strftime("%Y-%m-%d %H:%M:%S")
        }
        return jsonify(response_data)

@app.route('/Fermenter/data_transfer/online_data_pull_airpump', methods=['POST'])
def online_data_pull_airpump():
    if request.method == 'POST':
        airpumpState = request.form['airpumpState']
        current_time = datetime.now()
        airpump_log.insert_one({'airpumpState': airpumpState, 'timestamp': current_time})
        
        response_data = {
            'airpumpState': airpumpState,
            'timestamp': current_time.strftime("%Y-%m-%d %H:%M:%S")
        }
        return jsonify(response_data)

if __name__ == '__main__':
    app.run(debug=True)