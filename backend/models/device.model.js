import mongoose, { model } from "mongoose";
const { Schema } = mongoose;

// # deviceSchema
const deviceSchema = Schema(
  {
    name: { type: String },
    deviceId: { type: String },
    userId: { type: String },
  },
  { timestamps: true }
);

export default model("Device", deviceSchema);
