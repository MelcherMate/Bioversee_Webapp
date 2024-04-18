import pymongo
from pymongo import MongoClient
from gpiozero import Motor

# MongoDB Atlas settings
URI = "mongodb+srv://matemelcher:Mate2000@bioreactor.3u294gi.mongodb.net/"
db_name = "bioreactor"
collection_name = "actuatorsliders"

# Creating MongoDB client
client = pymongo.MongoClient(URI)
db = client[db_name]
collection = db[collection_name]

# Motor setup
motor = Motor(forward=23, backward=24)

# Function to set motor speed based on database state
def watch_collection():
    pipeline = [{"$match": {"operationType": "update"}}]
    with collection.watch(pipeline) as stream:
        print("Connected to the database successfully.")
        for change in stream:
            new_state = change["fullDocument"]["state"]
            set_motor_speed(new_state)

def set_motor_speed(state):
    if state > 0:
        motor.forward()
    elif state < 0:
        motor.backward()
    else:
        motor.stop()
    motor_speed = abs(state) / 100  # Convert state to motor speed (0-1)
    motor.value = motor_speed
    print(f"New motor speed set: {motor_speed}")

# Start listening for changes in the collection
watch_collection()