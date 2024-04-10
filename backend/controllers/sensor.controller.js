import Sensor from "../models/sensor.model";

const getSensors = (req, res, next) => {
  Sensor.find({}, (err, temperature) => {
    if (err) {
      return res.status(500).json({ error: "Error retrieving sensor data" });
    }
    res.status(200).json(temperature);
  });
};

export default {
  getSensors,
};
