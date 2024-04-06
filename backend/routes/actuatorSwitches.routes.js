import express from "express";
import actuatorCtrl from "../controllers/actuatorSwitches.controller";

const router = express.Router();

router
  .route("/api/v1/actuator/addSwitchesActuator")
  .post(actuatorCtrl.addActuator);
router
  .route("/api/v1/actuator/getSwitchesActuators")
  .get(actuatorCtrl.getActuators);

export default router;
