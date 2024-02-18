from gpiozero import OutputDevice

airpump_pin = 16
airpump = OutputDevice(airpump_pin)

def airpump_turn_on_off():
    if var2 is None:
        var2 = 0 
    if var2.get() == 1:
        airpump.on()
    else:
        airpump.off()
