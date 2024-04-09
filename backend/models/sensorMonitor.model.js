import mongoose, { model } from "mongoose";
const { Schema } = mongoose;

// # sensorMonitorSchema
const sensorMonitorSchema = Schema(
  { name: { type: String }, value: { type: Number } },
  { timestamps: true }
);

export default model("SensorMonitor", sensorMonitorSchema);
