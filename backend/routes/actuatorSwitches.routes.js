import express from "express";
import actuatorCtrl from "../controllers/actuatorSwitches.controller";

const router = express.Router();

router
  .route("/api/v1/actuator/postswitchactuator")
  .post(actuatorCtrl.postActuator);
router
  .route("/api/v1/actuator/getswitchesactuators")
  .get(actuatorCtrl.getActuators);

export default router;
