from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi
from datetime import datetime

app = Flask(__name__)
CORS(app)

uri = "mongodb+srv://matemelcher:Mate2000@fermenter.ubf4fsx.mongodb.net/?retryWrites=true&w=majority&appName=fermenter"
client = MongoClient(uri, server_api=ServerApi('1'))

try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)

db = client['deviceStateLog']
motor_log = db['motorLog']
airpump_log = db['airpumpLog']

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
