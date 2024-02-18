from gpiozero import OutputDevice
from gpiozero.pins.pigpio import PiGPIOFactory

factory = PiGPIOFactory()

airpump_pin = 23
airpump = OutputDevice(airpump_pin, pin_factory=factory)

var2 = None

def airpump_turn_on_off():
    global var2
    if var2 is None:
        var2 = 0 
    if var2.get() == 1:
        airpump.on()
    else:
        airpump.off()
