import tkinter as tk
from controll_codes.motor_controll import Motor
from controll_codes.air_controll import Airpump

#app window
app = tk.Tk()
app.title("Controll_test_window")
app.size(120, 120)

#motor controll
on_button_motor = tk.Button(app, text="Motor ON", command = Motor.motor_turn_on)
on_button_motor.pack(pady = 10)

off_button_motor = tk.Button(app, text="Motor OFF", command = Motor.motor_turn_off)
off_button_motor.pack(pady = 10)

#airpump controll
on_button_airpump = tk.Button(app, text="Airpump ON", command= Airpump.air_pump_on)
on_button_airpump.pack(pady = 10)

off_button_airpump = tk.Button(app, text="Airpump OFF", command= Airpump.air_pump_off)
off_button_airpump.pack(pady = 10)


status_label = tk.Label(app, text = "")
status_label.pack(pady = 10)

app.mainloop()