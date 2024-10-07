import Device from "../models/device.model";

const postDevice = (req, res, next) => {
  const newDevice = new Device({
    name: req.body.data.name,
    deviceId: req.body.data.deviceId,
    userId: req.body.data.userId,
  });

  newDevice.save((err, savedDevice) => {
    if (err) {
      return res.status(400).json({ error: "Error saving new device" });
    }
    req.device = savedDevice;
    res.status(201).json({
      message: "Device saved successfully!",
    });
  });
};

const getDevice = (req, res, next) => {
  Device.find({}, null, { sort: { createdAt: 1 } })
    .then((device) => res.json(device))
    .catch((err) => res.status(500).json({ error: "Error retrieving device" }));
};

const deleteDevice = (req, res, next) => {
  const { deviceId } = req.params;

  Device.deleteOne({ deviceId }, (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Error deleting device" });
    }
    if (result.deletedCount === 1) {
      res.status(200).json({ message: "Device deleted successfully." });
    } else {
      res.status(404).json({ message: "Device not found." });
    }
  });
};

const updateDevice = (req, res, next) => {
  const { deviceId } = req.params;
  const { name } = req.body;

  Device.findOneAndUpdate(
    { deviceId },
    { name },
    { new: true } // Returns the updated document
  )
    .then((updatedDevice) => {
      if (!updatedDevice) {
        return res.status(404).json({ message: "Device not found" });
      }
      res
        .status(200)
        .json({ message: "Device updated successfully!", updatedDevice });
    })
    .catch((err) =>
      res.status(500).json({ error: "Error updating device", err })
    );
};

export default {
  postDevice,
  getDevice,
  deleteDevice,
  updateDevice,
};
