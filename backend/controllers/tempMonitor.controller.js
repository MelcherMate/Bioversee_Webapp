import MonitorTemp from "../models/tempMonitor.model";

const getTemp = (req, res, next) => {
  MonitorTemp.find({}, (err, temperature) => {
    if (err) {
      return res
        .status(500)
        .json({ error: "Error retrieving temperature data" });
    }
    res.status(200).json(temperature);
  });
};

export default {
  getTemp,
};
