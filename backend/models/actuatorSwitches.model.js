import mongoose, { model } from "mongoose";
const { Schema } = mongoose;

// # actuatorSwitchesSchema
const actuatorSwitchesSchema = Schema(
  {
    name: { type: String },
    state: { type: Boolean },
    userId: { type: String },
  },
  { timestamps: true }
);

export default model("ActuatorSwitches", actuatorSwitchesSchema);
