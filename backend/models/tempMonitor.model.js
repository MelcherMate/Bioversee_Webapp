import mongoose, { model } from "mongoose";
const { Schema } = mongoose;

// # monitorTempSchema
const monitorTempSchema = Schema(
  { name: { type: String }, value: { type: Number } },
  { timestamps: false }
);

export default model("MonitorTemp", monitorTempSchema);
