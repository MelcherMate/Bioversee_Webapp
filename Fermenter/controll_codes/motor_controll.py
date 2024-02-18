from gpiozero import OutputDevice

motor_pin = 24
motor = OutputDevice(motor_pin)

var1 = None

def motor_turn_on_off():
    global var1
    if var1 is None:
        var1 = 0 
    if var1.get() == 1:
        motor.on()
    else:
        motor.off()
