from gpiozero import OutputDevice

air_pin = 16
airpump = OutputDevice(air_pin)

class Airpump:

    #air controll
    def air_pump_on ():
        airpump.on
        return f"airpump turned on"
    def air_pump_off ():
        airpump.off
        return f"airpump turned off"
