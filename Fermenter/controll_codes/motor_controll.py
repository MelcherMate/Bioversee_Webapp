from gpiozero import OutputDevice

motor_pin = 18
motor = OutputDevice(motor_pin)

def motor_turn_on_off():
    if var1 is None:
        var1 = 0 
    if var1.get() == 1:
        motor.on()
    else:
        motor.off()
