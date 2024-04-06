import ActuatorSliders from "../models/actuatorSwitches.model";

const addActuator = (req, res, next) => {
  const newActuator = new ActuatorSliders({
    name: req.body.data.name,
    state: req.body.data.state,
  });

  newActuator.save((err, savedActuator) => {
    if (err) {
      return res.status(400).json({ error: "Error saving actuator state" });
    }
    req.actuator = savedActuator;
    res.status(201).json({
      message: "Actuator saved successfully!",
    });
  });
};

const getActuators = (req, res, next) => {
  ActuatorSliders.find({}, (err, actuators) => {
    if (err) {
      return res.status(500).json({ error: "Error retrieving actuators" });
    }
    res.status(200).json(actuators);
  });
};

export default {
  addActuator,
  getActuators,
};
