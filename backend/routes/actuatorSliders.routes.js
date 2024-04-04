import express from "express";
import actuatorCtrl from "../controllers/actuatorSliders.controller";

const router = express.Router();

router
  .route("/api/v1/actuator/addSliderActuator")
  .post(actuatorCtrl.addActuator);
router
  .route("/api/v1/actuator/getSliderActuators")
  .get(actuatorCtrl.getActuators);

export default router;
