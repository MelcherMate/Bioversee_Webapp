from pymongo import MongoClient
from datetime import datetime

#connet to database
client = MongoClient('localhost', 27017)

database = client['Fermenter']

log_motor = database['Motor_log']
log_airpump = database['Airpump_log']
log_temperature = database['Temperature_log']

#load the data into the Database
class MotorData:
    @staticmethod
    def motor_turn_on():
        log_data = {'button': 'Motor ON', 'timestamp': datetime.now()}
        log_motor.insert_one(log_data)
    @staticmethod
    def motor_turn_on():
        log_data = {'button': 'Motor OFF', 'timestap': datetime.now()}
        log_motor.insert_one(log_data)

class AirpumpData:
    @staticmethod
    def airpump_turn_on():
        log_data = {'button': 'Airpump ON', 'timestap': datetime.now()}
        log_airpump.insert_one(log_data)
    @staticmethod
    def airpump_turn_off():
        log_data = {'button': 'Airpump OFF', 'timestap': datetime.now()}
        log_airpump.insert_one(log_data)

'''
class TempData:
    @staticmethod
    def log_temperature():
        temperature = read_temp()
        log_data = {'temperature': temperature, 'timestamp': datetime.now()}
        log_temperature.insert_one(log_data)
'''