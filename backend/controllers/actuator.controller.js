import Actuator from '../models/actuator.model';

const addActuator = (req, res, next) => {
    const newActuator = new Actuator({
      name: req.body.data.name,
      state: req.body.data.state,
    });
  
    newActuator.save((err, savedActuator) => {
      if (err) {
        return res.status(400).json({ error: "Error saving actuator state" });
      }
      req.actuator = savedActuator;
      res.status(201).json({
        message: 'Actuator saved successfully!',
      });
    });
  };

export default {
    addActuator
};