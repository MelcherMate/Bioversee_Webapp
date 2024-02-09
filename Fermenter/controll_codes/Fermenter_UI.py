import tkinter as tk
from motor_controll import Motor

#app window
app = tk.Tk()
app.title("motor_controll_test")
app.size(120, 120)

on_button = tk.Button(app, text="Motor ON", command = Motor.motor_turn_on)
on_button.pack(pady = 10)
off_button = tk.Button(app, text="Motor OFF", command = Motor.motor_turn_off)
off_button.pack(pady = 10)

status_label = tk.Label(app, text = "")
status_label.pack(pady = 10)

app.mainloop()