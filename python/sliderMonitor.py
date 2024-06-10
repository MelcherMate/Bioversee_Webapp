import pymongo
from pymongo import MongoClient
from gpiozero import PWMLED

# MongoDB Atlas settings
URI = "mongodb+srv://matemelcher:Mate2000@bioreactor.3u294gi.mongodb.net/"
db_name = "bioreactor"
collection_name = "actuatorsliders"

# Creating MongoDB client
client = pymongo.MongoClient(URI)
db = client[db_name]
collection = db[collection_name]

# PWM setup on GPIO pin 23 and 24
rotor_pwm = PWMLED(23)
aerator_pwm = PWMLED(24)

# Function to set the duty cycle (speed) based on database state
def initialize_and_watch_collection():
    # Initialize PWM based on current state in the database
    initialize_pwm()

    # Start watching for changes in the collection
    pipeline = [{'$match': {'operationType': 'insert'}}]
    with collection.watch(pipeline) as stream:
        print("Watching for changes in the collection...")
        for change in stream:
            new_document = change['fullDocument']
            name = new_document['name']
            state = new_document['state']

            if name == "rotor":
                set_duty_cycle(rotor_pwm, state)
            elif name == "aerator":
                set_duty_cycle(aerator_pwm, state)

def initialize_pwm():
    # Fetch the latest state from the database (assuming a single document)
    latest_state = collection.find_one()
    if latest_state:
        rotor_state = latest_state.get("rotor", 0)
        aerator_state = latest_state.get("aerator", 0)
        set_duty_cycle(rotor_pwm, rotor_state)
        set_duty_cycle(aerator_pwm, aerator_state)

def set_duty_cycle(pwm_pin, state):
    duty_cycle = abs(state) / 100  # Convert state to duty cycle (0-1)
    pwm_pin.value = duty_cycle
    print(f"New duty cycle set on GPIO {pwm_pin.pin}: {duty_cycle}")

if __name__ == "__main__":
    try:
        # Initialize and start watching for changes in the collection
        initialize_and_watch_collection()
    except KeyboardInterrupt:
        print("Program terminated by User.")


