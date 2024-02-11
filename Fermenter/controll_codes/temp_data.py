from w1thermsensor import W1ThermSensor

def read_temp():
    sensor = W1ThermSensor()
    temp = sensor.get_temperature()
    return temp

