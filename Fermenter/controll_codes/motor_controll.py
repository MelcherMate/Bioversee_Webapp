from gpiozero import OutputDevice
from Fermenter_UI import var1

motor_pin = 18
motor = OutputDevice(motor_pin)

class Motor:

    #motor controll
    def motor_turn_on_off():
        if var1 == 1:
            motor.on
        else:
            motor.off