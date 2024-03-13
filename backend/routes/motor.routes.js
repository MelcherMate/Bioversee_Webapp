import express from 'express';
import motorCtrl from '../controllers/motor.controller';

const router = express.Router();

router.route('/api/v1/motor/patchmotor').patch(motorCtrl.patchMotor);
// router.route('/api/v1/users').get(motorCtrl.getMotor); // ez meg nincs meg

export default router;
