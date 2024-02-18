from tkinter import *
import ttkbootstrap as tb
import tkinter as tk
from controll_codes.air_controll import airpump_turn_on_off
from controll_codes.motor_controll import motor_turn_on_off

#APP WINDOW
root = tb.Window(themename="superhero")
root.title("Fermenter Controller")
root.iconbitmap('images/codemy.ico')
window_width = 600
window_height = 400
screen_width = root.winfo_screenwidth()
screen_height = root.winfo_screenheight()

x_coordinate = int((screen_width - window_width) / 2)
y_coordinate = int((screen_height - window_height) / 2)
root.geometry(f"{window_width}x{window_height}+{x_coordinate}+{y_coordinate}")

#TITLE
frame = tk.Frame(root)
frame.grid(row=0, column=0, sticky="nsew")

title_label = Label(text="Fermenter Controller", font=("Helvetica", 28))

#MOTOR BUTTON
motor_label = Label(text="The motor is OFF", font=("Helvetica", 16))
var1 = IntVar()
motor_button = tb.Checkbutton(bootstyle="success, round-toggle", text="Motor", variable=var1, onvalue=1, offvalue=0, command=motor_turn_on_off)

#AIRPUMP BUTTON
airpump_label = Label(text="The airpump is OFF", font=("Helvetica", 16))
var2 = IntVar()
airpump_button = tb.Checkbutton(bootstyle="success, round-toggle", text="Airpump", variable=var2, onvalue=1, offvalue=0, command=airpump_turn_on_off)

#PLACEMENT
title_label.place(relx=0.5, rely=0.1, anchor="center")
motor_label.place(relx=0.3, rely=0.3, anchor="center")
motor_button.place(relx=0.7, rely=0.3, anchor="center")
airpump_label.place(relx=0.3, rely=0.5, anchor="center")
airpump_button.place(relx=0.7, rely=0.5, anchor="center")

root.mainloop()
