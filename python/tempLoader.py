import os
import glob
import time
from pymongo import MongoClient
from datetime import datetime
import json

# These two lines initialize the device:
os.system('modprobe w1-gpio')
os.system('modprobe w1-therm')

# Temperature sensor is connected on GPIO4 pin to the Raspberry Pi
base_dir = '/sys/bus/w1/devices/'
device_path = glob.glob(base_dir + '28*')[0]  # file path of the sensor
rom = device_path.split('/')[-1]  # rom name

def read_temp_raw():
    with open(device_path +'/w1_slave','r') as f:
        valid, temp = f.readlines()
    return valid, temp
 
def read_temp():
    valid, temp = read_temp_raw()

    while 'YES' not in valid:
        time.sleep(0.2)
        valid, temp = read_temp_raw()

    pos = temp.index('t=')
    if pos != -1:
        temp_string = temp[pos+2:]
        temp_c = float(temp_string) / 1000.0 
        return round(temp_c, 1)

def connect_to_mongodb():
    client = MongoClient("mongodb+srv://matemelcher:Mate2000@bioreactor.3u294gi.mongodb.net/")  # MongoDB server access
    db = client["bioreactor"]  # Selecting the database
    collection = db["sensors"]  # Selecting the collection
    return collection

def insert_temperature_data(collection, temperature_c):
    data = {
        "name": "temperature",
        "value": temperature_c,
        "createdAt": datetime.utcnow(),  # Current UTC time
        "updatedAt": datetime.utcnow(),  # Current UTC time
        "__v": 0
    }
    collection.insert_one(data)
    print("Data inserted successfully.")

if __name__ == "__main__":
    print('ROM: ' + rom)
    
    # Connect to MongoDB
    collection = connect_to_mongodb()
    print("Successfully connected to MongoDB.")

    while True:
        c = read_temp()
        print('C={:,.1f}'.format(c))
        
        # Insert temperature data into MongoDB
        insert_temperature_data(collection, c)
        
        time.sleep(2)




