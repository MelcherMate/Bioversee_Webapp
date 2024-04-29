# Software aspect of the project

## General:

The main idea behind the project comes from the fact that many bioreactors in laboratory environment are in a lack the ability to be controlled remotely via internet. To solve this problem, there are many easy accessible off-the-shelf devices which can be the foundation of upgrading aged machinery. With these, it`s relatively easy to hook up the sensors and actuators from an existing bioreactor and control them. Nowadays software developers focus on building web applications rather than desktop apps, so I decided I would like to do the same with my idea. This new system will be capable of controlling any bioreactor with a web-based, modern-looking and easy to use controller and it offers a cheap solution for bioreactor renovation.

## Controller website:

The controller website is written in HTML, CSS and JavaScript. It uses a node.js engine to run the server and a MongoDB database to store the data for the required and current state for the actuators. For the website I use a 3-tier architecture system. In this stage there is no user registration system implemented. In the future I am planning on using Amazon Web Service (AWS) as a host.

### Presentation tier:

In the presentation tier I am developing a simple and easy to use design with sliders and buttons to control the actuators for the reactor. Here I also must present near live data from the sensors. In addition, we will need a user management system to control which user can access which part of the database, because the website is going to run on our side.

### Application tier:

In the application tier we will collect the required setting for the bioreactor and load the current state of the actuators we want into the database. For this purpose, I use an express.js server to communicate between the client and the database. The data is loaded into in a form we set in the backend/models folder by the loader code from the backend/controllers folder. The controller script reaches the client in a route we set in the backend/routes folder.

### Data tier:

In the data tier we have a MongoDB cloud-based database where we will store the data for the actuator and the data from the sensors. In the bioreactor database the system has 3 collections. In the actuators collection I store the data for the required setting for the actuators and in the sensors collection we store the data from the thermo and pH sensor. There are 2 types of actuators, ON/OFF and adjustable types. To store the data for the I used 2 separated actuator collections for better data query.

## Bioreactor controller:

I use python codes to control the actuators. I did experiments using JavaScript for this purpose, but python turned out way more simple for this job. With the pymongo database and using a Raspberry Pi as a platform for reactor control I managed to write each code for the actuators and sensors within 100 lines.

## Logical blueprint for the software setup:

![Blueprint for hardware logical design](../blueprints/softwareDesign.png)
