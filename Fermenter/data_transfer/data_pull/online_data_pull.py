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


@app.route('/Fermenter/data_transfer/data_pull/online_data_pull', methods=['POST'])
def online_data_pull():
    if request.method == 'POST':
        
        motorState = request.form['motorState']
        airpumpState = request.form['airpumpState']

        current_time = datetime.now()

        motor_log.insert_one({'motorState': motorState, 'timestamp': current_time})
        airpump_log.insert_one({'airpumpState': airpumpState, 'timestamp': current_time})

        response_data = {
            'motorState': motorState,
            'airpumpState': airpumpState,
            'timestamp': current_time.strftime("%Y-%m-%d %H:%M:%S")
        }
        return jsonify(response_data)

if __name__ == '__main__':
    app.run(debug=True)