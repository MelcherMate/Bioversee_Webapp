from __init__ import OutputDevice

air_pin = 2
airpump = OutputDevice(air_pin)

class Airpump:

    #air controll
    def air_pump_on ():
        airpump.on
        return f"levegoztetes bekapcsolva"
    def air_pump_off ():
        airpump.off
        return f"levegoztetes kikapcsolva"
