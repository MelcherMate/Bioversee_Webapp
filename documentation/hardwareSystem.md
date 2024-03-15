# Harware aspect of the project

## General
Most bioreactors work the same. They will 5 activators for electric motors (for the rotor, the aerator, the fluid circulation and for acid and base intake) and 2 measuring instruments (temperature and pH) to have informations abut the system. We can add additional instruments as well, like for measuring the purity of the air that goes into the aerator, or measuring the weight live troughout the fermentation process. In the first stage of my development I would like to focus on the basic 5+2 setup and than work on these optional devices. All of our devices and sensors needs to be heat, corrosion, acid and base resistant.

### Activators:
    i. Rotor: The rotors purpose is simple. It needs to create a flow in the fluid to provide a homogen system. The rotor is powered by an electric motor with can be 1 speed design or an instrument, which can be set to a needed %. The rotor need 1 GPIO pin on the Raspberry Pi.
    
    ii. Aerator: The aerator works just like the rotor except it's purpose is different. It provides oxygen the organisms. The aerator need an airpump (which is basically an other electric motor) it can be also an on/off device or an ajustable setup. this need 1 GPIO pin on Raspberry Pi.
    
    iii. Water pump: To set the temperature we need, this system is circulating water between the 2 wall layer of the reactor. This water is either cold or hot depending on our needs. If we want to warm the reaction chamber we circulate warm water, if we want to cool it, we use cold water. In the first stage I assume there is avialable warm and cold water. It's easyer if we use 2 pumps for the hot and the cold water. These devices need 2 GPIO pin on Raspberry Pi.

    iv. Base and acid pipe: The set the required pH in the fluid we have to add base or acid to the system. To do that we need 2 pumps, each able to pump 1 liquid. These can be just simple on/off instruments, here we do not need more specific settings. This part of the system needs 2 GPIO pins on Rapsberry Pi.

### Measuring instruments:
    1. Thermometer: The thermometer is a simple device. I needs some power and a pin where the sensor can give the Rasperry the current temperature. From the temperature data I can decide weather I need to ciculate warm or cold water. This will take 3 pins. A ground pin, a 3.3V pin and GPIO pin. (GPIO 4 recommended)

    2. ph meter: This sensor is also a simple one. Works the same like the thermometer and gives back live pH value feed to the Rapsberry. From it's feed we can set controll codes for the base and acid pumps. This also will need a ground pin, a 3.3V pin and a GPIO pin.
