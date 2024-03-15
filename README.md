# Solution to controll any fermenter remote via a webapplication

## General idea:

This is a prototype project of my idea to create a basic fermenter controller website, which can controll any hooked up device. For the system it doesn't matter how old or new a fermenter is. It just needs a Raspberry PI to connect the devices with a computer and access to the internet and it will be good to go.

## In dept review of a basic fermenter:

A fermenter is a common machine with a few controllers and devices attached to it. Fermenters al also called as bioreactors which refers to their purpose. We call a device bioreactor, when inside of them, there is a biologically active environment, inwhich a chemical process is carried out involving organisms or biochemically active stubstance. (like enzimes)

The organisms inside of a bioreactor might have special needs. We have to provide the oxigen, therefor we use submerged aerators. We need to provide and even distribution in our chamber and for that we mostly use an agitation system. (basically some kind of rotor in the fluid) There are some exaples for fermenters which uses the aerator system to create flow inside but these are used in special scenarios.

Now that we have oxigen provided, organisms are able to grow and work inside. Every organism has their own thermo and pH optimum where they are the most effective. To maximize they productivity we need to provide and keep the best conditions for them. To controll the pH in the reactor area we can add base or acid to the fluid.
Bioreactors commonly use dual layer chambers. Between the layers we can circulate water and with it, we can ajust the temperature in the reactionspace.

![alt text](blueprints/basicBioreactor.png)

## System setup theory:

The idea was that to have a Raspberry PI and trough the GPIO pins hook up the devices from an existing fermenter and access the device setting on a website.
To do that, first I need to create the webservice and the when thats ready to test I need to build the actual device. As a product I want to give the code and documentation to the customer. They have to buy their own devices for the system. I will create a guidebook, how to set up the hardware. On the customer side we will need to run python codes to actually controll the bioreactor. On server side the website has to communicate with the database. We can set the current state we want for the controllest in the database. From there the locally runing python codes can give feedback to the server and the customer will be able to see the current state of their device on the website.

In theory the website works separate from the local python codes, but they are connected with useing the same database.

## How to run the code:

Run server: `node app.js` in terminal within the backend library
Stop server: `control+c`

Designed on Apple Macbook Air M1 (2020) and PC on Windows 10 (latest version) and will be tested on Raspberry PI 5 8GB.

## Used packages:

- git
- node.js
- express.js
