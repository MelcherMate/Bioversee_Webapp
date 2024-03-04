import pymongo
from pymongo import collection
import time
from data_transfer.data_pull.variables import motor_state, airpump_state

#connet to database
client = pymongo.MongoClient('localhost', 27017)
db = client['Fermenter']

log_motor = db['Motor_log']
log_airpump = db['Airpump_log']

def update_state(variable_name, new_value):
    global motor_state, airpump_state
    
    if variable_name == "motor_state":
        motor_state = new_value
    elif variable_name == "airpump_state":
        airpump_state = new_value
    
    # Naplózás a MongoDB adatbázisba
    log_entry = {"timestamp": time.time(), "variable": variable_name, "value": new_value}
    collection.insert_one(log_entry)

# Példa változók állapotának változása
update_state("motor_state", 1)
update_state("airpump_state", 1)