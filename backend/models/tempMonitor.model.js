import mongoose, { model } from "mongoose";
const { Schema } = mongoose;

// # monitorTempSchema
const monitorTempSchema = Schema(
  { name: { type: String }, value: { type: Number } },
  { timestamps: true }
);

export default model("MonitorTemp", monitorTempSchema);
