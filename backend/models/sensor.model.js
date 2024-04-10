import mongoose, { model } from "mongoose";
const { Schema } = mongoose;

// # sensorSchema
const sensorSchema = Schema(
  { name: { type: String }, value: { type: Number } },
  { timestamps: true }
);

export default model("Sensor", sensorSchema);
