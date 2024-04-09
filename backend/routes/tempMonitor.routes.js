import express from "express";
import tempCtrl from "../controllers/tempMonitor.controller";

const router = express.Router();

router.route("/api/v1/sensor/gettemperature").get(tempCtrl.getTemp);

export default router;
