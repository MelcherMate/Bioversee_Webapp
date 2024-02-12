import tkinter as tk
from __init__ import Motor
from __init__ import Airpump
from __init__ import read_temp
from time import sleep

def start_temperature_measurement():
    temperature_label.config(text="Hőmérséklet mérés indítása")
    measure_temperature()

def stop_temperature_measurement():
    global running
    running = False
    temperature_label.config(text="Hőmérséklet mérés leállítása")

def measure_temperature():
    global running
    running = True
    while running:
        temperature = read_temp()
        temperature_label.config(text=f"Aktuális hőmérséklet: {temperature} Celsius fok")
        root.update()
        sleep(5)

def motor_on():
    Motor.motor_turn_on()
    status_label.config(text="Motor bekapcsolva")

def motor_off():
    Motor.motor_turn_off()
    status_label.config(text="Motor kikapcsolva")

def airpump_on():
    Airpump.air_pump_on()
    status_label.config(text="Szivattyú bekapcsolva")

def airpump_off():
    Airpump.air_pump_off()
    status_label.config(text="Szivattyú kikapcsolva")

root = tk.Tk()
root.title("Controll_test_window")
root.geometry("800x600")

# Motor controll buttons
on_button_motor = tk.Button(root, text="Motor ON", command=motor_on)
on_button_motor.pack(pady=10)

off_button_motor = tk.Button(root, text="Motor OFF", command=motor_off)
off_button_motor.pack(pady=10)

# Airpump controll buttons
on_button_airpump = tk.Button(root, text="Airpump ON", command=airpump_on)
on_button_airpump.pack(pady=10)

off_button_airpump = tk.Button(root, text="Airpump OFF", command=airpump_off)
off_button_airpump.pack(pady=10)

# Temperature controll button
start_button = tk.Button(root, text="Hőmérséklet mérés indítása", command=start_temperature_measurement)
start_button.pack(pady=10)

stop_button = tk.Button(root, text="Hőmérséklet mérés leállítása", command=stop_temperature_measurement)
stop_button.pack(pady=10)

temperature_label = tk.Label(root, text="")
temperature_label.pack(pady=10)

status_label = tk.Label(root, text="")
status_label.pack(pady=10)

root.mainloop()
