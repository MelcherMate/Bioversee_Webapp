import express from "express";
import actuatorCtrl from "../controllers/actuator.controller";

const router = express.Router();

router.route("/api/v1/actuator/addactuator").post(actuatorCtrl.addActuator);
router.route("/api/v1/actuator/getactuators").get(actuatorCtrl.getActuators);

export default router;
