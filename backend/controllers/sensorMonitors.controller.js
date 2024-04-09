import SensorMonitor from "../models/sensorMonitor.model";

const getSensors = (req, res, next) => {
  SensorMonitor.find({}, (err, temperature) => {
    if (err) {
      return res.status(500).json({ error: "Error retrieving sensor data" });
    }
    res.status(200).json(sensor);
  });
};

export default {
  getSensors,
};
