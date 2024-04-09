import express from "express";
import actuatorCtrl from "../controllers/actuatorSliders.controller";

const router = express.Router();

router
  .route("/api/v1/actuator/addslideractuator")
  .post(actuatorCtrl.addActuator);
router
  .route("/api/v1/actuator/getslideractuators")
  .get(actuatorCtrl.getActuators);

export default router;
