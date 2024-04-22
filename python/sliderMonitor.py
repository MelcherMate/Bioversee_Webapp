import pymongo
from pymongo import MongoClient
from gpiozero import Motor, OutputDevice

# MongoDB Atlas settings
URI = "mongodb+srv://matemelcher:Mate2000@bioreactor.3u294gi.mongodb.net/"
db_name = "bioreactor"
collection_name = "actuatorsliders"

# Creating MongoDB client
client = pymongo.MongoClient(URI)
db = client[db_name]
collection = db[collection_name]

# Rotor and aerator setup
rotor = Motor(forward=23, backward=24)
aerator = Motor(forward=17, backward=27)

# Function to set rotor speed based on database state
def initialize_and_watch_collection():
    # Initialize rotor and aerator based on current state in the database
    initialize_rotor_and_aerator()
    
    # Start watching for changes in the collection
    pipeline = [{'$match': {'operationType': 'insert'}}]
    with collection.watch(pipeline) as stream:
        print("Watching for changes in the collection...")
        for change in stream:
            new_document = change['fullDocument']
            name = new_document['name']
            state = new_document['state']
            
            if name == "rotor":
                set_rotor_speed(state)
            elif name == "aerator":
                set_aerator_speed(state)

def initialize_rotor_and_aerator():
    # Fetch the latest state of rotor and aerator from the database
    latest_rotor_state = collection.find_one({"name": "rotor"}, sort=[("_id", pymongo.DESCENDING)])
    latest_aerator_state = collection.find_one({"name": "aerator"}, sort=[("_id", pymongo.DESCENDING)])
    
    # Set rotor and aerator speed based on the latest state
    if latest_rotor_state:
        set_rotor_speed(latest_rotor_state["state"])
    if latest_aerator_state:
        set_aerator_speed(latest_aerator_state["state"])

def set_rotor_speed(state):
    if state > 0:
        rotor.forward()
    elif state < 0:
        rotor.backward()
    else:
        rotor.stop()
    rotor_speed = abs(state) / 100  # Convert state to rotor speed (0-1)
    rotor.value = rotor_speed
    print(f"New rotor speed set: {rotor_speed}")

def set_aerator_speed(state):
    if state > 0:
        aerator.forward()
    elif state < 0:
        aerator.backward()
    else:
        aerator.stop()
    aerator_speed = abs(state) / 100  # Convert state to aerator speed (0-1)
    aerator.value = aerator_speed
    print(f"New aerator speed set: {aerator_speed}")

if __name__ == "__main__":
    try:
        # Initialize and start watching for changes in the collection
        initialize_and_watch_collection()
    except KeyboardInterrupt:
        print("Program terminated by user.")