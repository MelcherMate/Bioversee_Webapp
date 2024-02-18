from gpiozero import OutputDevice

airpump_pin = 16
airpump = OutputDevice(airpump_pin)

var2 = None

def airpump_turn_on_off():
    global var2
    if var2 is None:
        var2 = 0 
    if var2.get() == 1:
        airpump.on()
    else:
        airpump.off()
