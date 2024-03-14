import Actuator from '../models/actuator.model';

// # patchActuator
const patchActuator = (req, res) => {
    const {data} = req.body;
    console.log(data, data._id, data.state);
Actuator.findByIdAndUpdate(data._id, data, { upsert: true, new: true }, (err) => {
    if (err) return res.status(400).json({ status: 400, error: "Error" });
    res.status(200).json({ status: 200, message: 'Actuator was sucessfully patched.' });
    });
};

export default {
    patchActuator
};