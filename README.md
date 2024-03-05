This is a prototype project of my idea to create a basic fermenter machine, which can be controlled by air via a web service.

How to run the code:
Right now I am testing the code with "live server" vscode addon for the website part and running the online_data_pull.py manually from console. To see the resutl you need to use the same adresses and ports just like I do and also you have to use mongoDB comapass to see the data in your local db. Cloud saveing coming soon...

The code is desigend in python 3.12.0
Designed on Apple Macbook Air M1 (2020) and PC wiht windows 10 (latest version)
Tested on Raspberry PI 5 8GB

Used packages:
-git
-venv
-pymongo
-gpiozero
-flask
-flask_cors

Programming tasktree:
1. First step of the project is to build a basic code, which does the job and turns On and OFF the devices.
2. Second step is to be able to controll the airflow, the motor rotation speed and the temprerature. (Last is a hard one for me, cause it has hardware difficulities)
3. Thirs step is to create a log system for which stores the changes made in the devices.
4. create a website for the controlls
5. Create a basic desktop app interface for easy controll (this is a development tool for me, it will evolve trough the development. In here I wanna finalyse it, than change it to a web UI.)
6. add a user system to the website
7. make the users able to controll their own devices and see their recorsd from the database

Progress:

So the controll of the GPIO pins turned out to be a bigger task then it felt like before.

I did the mongodb database for the program.

I started creating the fist version of the website.

I built the method to request data from the HTML file.

New layout and data pull