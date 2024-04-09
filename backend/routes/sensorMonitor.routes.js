import express from "express";
import sensorCtrl from "../controllers/sensorMonitors.controller";

const router = express.Router();

router.route("/api/v1/sensor/getsensordata").get(sensorCtrl.getSensordata);

export default router;
