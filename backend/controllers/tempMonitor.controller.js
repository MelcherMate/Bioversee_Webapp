import MonitorTemp from "../models/tempMonitor.model";

const getTemp = (req, res, next) => {
  MonitorTemp.find({}, (err, temperature) => {
    if (err) {
      return res
        .status(500)
        .json({ error: "Error retrieving temperature data", details: err }); // Hiba részleteinek hozzáadása a válaszhoz
    }
    console.log("Retrieved temperature data:", temperature); // Adatok logolása a konzolra a hibaelhárításhoz
    res.status(200).json(temperature);
  });
};

export default {
  getTemp,
};
