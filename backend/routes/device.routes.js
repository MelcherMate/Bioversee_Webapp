import express from "express";
import deviceCtrl from "../controllers/device.controller";

const router = express.Router();

router.route("/api/v1/postdevice").post(deviceCtrl.postDevice);
router.route("/api/v1/getdevice").get(deviceCtrl.getDevice);
router.delete("/api/v1/deletedevice/:deviceId").get(deviceCtrl.deleteDevice);

export default router;
