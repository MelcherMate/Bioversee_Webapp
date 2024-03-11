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

# flask functions
@app.route('/Fermenter/backend/flask_server/motor_info', methods=['POST'])
def motor_info():
    if request.method == 'POST':
        motorState = request.form['motorState']
        current_time = datetime.now()
        
        motor_log.update_one(
            {},
            {'$set': {'motorState': motorState, 'timestamp': current_time}},
            upsert=True
        )
        
        response_data = {
            'motorState': motorState,
            'timestamp': current_time.strftime("%Y-%m-%d %H:%M:%S")
        }
        return jsonify(response_data)

@app.route('/Fermenter/backend/flask_server/airpump_info', methods=['POST'])
def airpump_info():
    if request.method == 'POST':
        airpumpState = request.form['airpumpState']
        current_time = datetime.now()
        
        airpump_log.update_one(
            {},
            {'$set': {'airpumpState': airpumpState, 'timestamp': current_time}},
            upsert=True
        )
        
        response_data = {
            'airpumpState': airpumpState,
            'timestamp': current_time.strftime("%Y-%m-%d %H:%M:%S")
        }
        return jsonify(response_data)

if __name__ == '__main__':
    app.run(debug=True)
