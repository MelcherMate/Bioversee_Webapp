import express from "express";
import sensorCtrl from "../controllers/sensor.controller";

const router = express.Router();

router.route("/api/v1/sensor/getsensordata").get(sensorCtrl.getSensors);

export default router;
