from gpiozero import OutputDevice
from Fermenter_UI import var2

air_pin = 16
airpump = OutputDevice(air_pin)

class Airpump:

    #air controll
    def airpump_turn_on_off ():
        if var2 == 1 is True:
            airpump.on
        else:
            airpump.off
