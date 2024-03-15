import express from 'express';
import actuatorCtrl from '../controllers/actuator.controller';

const router = express.Router();

router.route('/api/v1/actuator/addactuator').post(actuatorCtrl.addActuator);
// router.route('/api/v1/users').get(motorCtrl.getMotor); // ez meg nincs meg

export default router;
