import pymongo
import time
import gpiozero as GPIO

# MongoDB Atlas settings
URI = "mongodb+srv://matemelcher:Mate2000@bioreactor.3u294gi.mongodb.net/"
db = "bioreactor"
collection = "actuatorswitches"

# Creating MongoDB client
client = pymongo.MongoClient(URI)
db = client[db]
collection = db[collection]

# Initialize variables to store previous states
prev_states = {}

# Initialize GPIO pins
warm_w_pump = GPIO.OutputDevice(21)
cold_w_pump = GPIO.OutputDevice(26)
acid_pump = GPIO.OutputDevice(20)
base_pump = GPIO.OutputDevice(16)

def monitor_database_changes():
    global prev_states
    
    while True:
        # Fetching the last document for each switch
        switch_states = {}

        for switch_name in ["switchColdWaterPump", "switchWarmWaterPump", "switchAcidPump", "switchBasePump"]:
            switch_doc = collection.find_one({"name": switch_name}, sort=[('_id', pymongo.DESCENDING)])
            switch_state = switch_doc["state"] if switch_doc else False
            switch_states[switch_name] = switch_state


        if switch_name == 'switchWarmWaterPump':
            if switch_state == True:
                warm_w_pump.on()
                print('Warm water pump ON')
            else:
                warm_w_pump.off()
                print('Warm water pump OFF')        

        elif switch_name == 'switchColdWaterPump':
            if switch_state == True:
                cold_w_pump.on()
                print('Cold water pump ON')
            else:
                cold_w_pump.off()
                print('Cold water pump OFF')

        elif switch_name == 'switchAcidPump':
            if switch_state == True:
                acid_pump.on()
                print('Acid pump ON')
            else:
                acid_pump.off()
                print('Acid pump OFF')

        elif switch_name == 'switchBasePump':
            if switch_state == True:
                base_pump.on()
                print('Base pump ON')
            else:
                base_pump.off()
                print('Base pump OFF')
        
        # Check for changes in states
        for switch_name, state in switch_states.items():
            if switch_name not in prev_states or prev_states[switch_name] != state:
                print('---------------------------------------------')
                print(f"Latest state for '{switch_name}': {state}")
                print('---------------------------------------------')
                prev_states[switch_name] = state

        time.sleep(1)  # Waiting for new data
                

if __name__ == "__main__":
    monitor_database_changes()