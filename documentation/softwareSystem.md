# Software aspect of the project

## General:

The main idea behind the project comes from the fact that most bioreactors in the fermentation industry are in a lack the ability to be controlled remotely. To solve this problem, we have the perfect hardware in our hand, which is the Raspberry Pi. With a Pi it is relatively easy to hook up the sensors and actuators from an existing bioreactor and control them. Nowadays software developers focus on building web applications rather than desktop apps, so I decided I would like to do the same with my idea. This new system will be capable of controlling any bioreactor with a web-based, modern-looking and easy to use controller.

## Controller website:

The controller website is written in HTML, CSS and JavaScript. It uses a node.js engine to run the server and a MongoDB database to store the data for the required and current state for the actuators. For the website I use a 3-tier architecture system.

### Presentation tier:

In the presentation tier I am developing a simple and easy to use design with sliders and buttons to control the actuators for the reactor. Here I also must present live data from the sensors. In further will need a user management system to control which user can access which part of the database, cause the website is going to run on our side.

### Application tier:

In the application tier we will collect the required setting for the bioreactor and load the current state of the actuators we want into the database. For this purpose, I use an express.js server to communicate between the client and the database. The data is loaded into in a form we set in the backend/models folder by the loader code from the backend/controllers folder. The controller script reaches the client in a route we set in the backend/routes folder.

### Data tier:

In the data tier we have a MongoDB cloud-based database where we will store the data for the actuator and the data from the sensors. In the reactorState database the system has 2 collections. In the actuators collection we store the data for the required setting for the actuators and in the sensors collection we store the data from the thermo and pH sensor.

## Bioreactor controller:

The original idea was using python codes to controll the actuators on the Raspberry Pi. However scince I started the webdevelopment using HTML, CSS and Javascript and built an express.js server to run the aplication, for the first prototype it is better, if I use these languages to controll the actuators with Javascript as well. I plan to use the already exisiting server to give commands for the Raspberry Pi. Before I enter to the stage when I add users to the project I belive It will get the job done for hardware and backend testing.

## Logical blueprint for the software setup:

![Blueprint for hardware logical design](../blueprints/softwareDesign.png)
