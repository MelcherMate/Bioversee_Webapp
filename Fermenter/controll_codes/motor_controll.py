from gpiozero import OutputDevice

motor_pin = 18
motor = OutputDevice(motor_pin)

class Motor:

    #motor controll
    def motor_turn_on():
        motor.on()
        return f'motor bekapcsolva'
    def motor_turn_off():
        motor.off()
        return f'motor kikapcsolva'