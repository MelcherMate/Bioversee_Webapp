from pymongo import MongoClient

#connet to database
client = MongoClient("mongodb://localhost:27017")

database = client['Fermenter']

log_motor = database['Motor_log']
log_temp = database['Temperature_log']






