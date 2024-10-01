import express from "express";
import deviceCtrl from "../controllers/device.controller";

const router = express.Router();

router.route("/api/v1/actuator/postdevice").post(deviceCtrl.postDevice);
router.route("/api/v1/actuator/getdevice").get(deviceCtrl.getDevice);

export default router;
