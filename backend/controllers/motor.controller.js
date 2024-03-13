import Motor from '../models/motor.model';

// # patchMotor
const patchMotor = (req, res, next) => {
const { motor } = req.body;

Motor.findByIdAndUpdate(motor._id, motor, { upsert: true, new: true }, (err) => {
    
    if (err) return res.status(400).json({ status: 400, error: errorHandler.getErrorMessage(err) });
    res.status(200).json({ status: 200, message: 'Motor was sucessfully updated.' });
    return next();
    });
};

export default {
    patchMotor
};
