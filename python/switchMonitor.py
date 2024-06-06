import pymongo
import time
import gpiozero as GPIO

# MongoDB Atlas settings
URI = "mongodb+srv://matemelcher:Mate2000@bioreactor.3u294gi.mongodb.net/"
db_name = "bioreactor"
collection_name = "actuatorswitches"

# Creating MongoDB client
client = pymongo.MongoClient(URI)
db = client[db_name]
collection = db[collection_name]

# Initialize GPIO pins
warm_w_pump = GPIO.OutputDevice(21)
cold_w_pump = GPIO.OutputDevice(26)
acid_pump = GPIO.OutputDevice(20)
base_pump = GPIO.OutputDevice(16)

def control_warm_water_pump(state):
    if not state:
        warm_w_pump.on()
        print('Warm water pump OFF')
    else:
        warm_w_pump.off()
        print('Warm water pump ON')

def control_cold_water_pump(state):
    if not state:
        cold_w_pump.on()
        print('Cold water pump OFF')
    else:
        cold_w_pump.off()
        print('Cold water pump ON')

def control_acid_pump(state):
    if not state:
        acid_pump.on()
        print('Acid pump OFF')
    else:
        acid_pump.off()
        print('Acid pump ON')

def control_base_pump(state):
    if not state:
        base_pump.on()
        print('Base pump OFF')
    else:
        base_pump.off()
        print('Base pump ON')

def monitor_database_changes():
    prev_states = {}

    while True:
        switch_states = {}

        for switch_name in ["switchColdWaterPump", "switchWarmWaterPump", "switchAcidPump", "switchBasePump"]:
            switch_doc = collection.find_one({"name": switch_name}, sort=[('_id', pymongo.DESCENDING)])
            switch_state = switch_doc["state"] if switch_doc else False
            switch_states[switch_name] = switch_state

            if switch_name not in prev_states or prev_states[switch_name] != switch_state:
                print('---------------------------------------------')
                print(f"Latest state for '{switch_name}': {switch_state}")
                prev_states[switch_name] = switch_state

                # Call the corresponding control function based on the switch name
                if switch_name == 'switchWarmWaterPump':
                    control_warm_water_pump(switch_state)
                elif switch_name == 'switchColdWaterPump':
                    control_cold_water_pump(switch_state)
                elif switch_name == 'switchAcidPump':
                    control_acid_pump(switch_state)
                elif switch_name == 'switchBasePump':
                    control_base_pump(switch_state)

        time.sleep(0.1)  # Waiting for new data

if __name__ == "__main__":
    monitor_database_changes()

