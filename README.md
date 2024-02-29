This is a prototype project of my idea to create a basic fermenter machine, which can be controlled by air via a web service.

How to run the code:
The code is desigened to run on raspberry PI

The code is desigend in python 3.12.0
Designed on Apple Macbook Air M1 (2020)
Tested on Raspberry PI 5 8GB

Used packages:
-git
-venv
-pymongo
-gpiozero
-flask

Programming tasktree:
1. First step of the project is to build a basic code, which does the job and turns On and OFF the devices.
2. Second step is to be able to controll the airflow, the motor rotation speed and the temprerature. (Last is a hard one for me, cause it has hardware difficulities)
3. Thirs step is to create a log system for which stores the changes made in the devices.
4. Create a basic desktop app interface for easy controll (this is a development tool for me, it will evolve trough the development. In here I wanna finalyse it, than change it to a web UI.)
5. create a website for the controlls
6. add a user system to the website
7. make the users able to controll their own devices and see their recorsd from the database
