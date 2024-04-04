import mongoose, { model } from "mongoose";
const { Schema } = mongoose;

// # actuatorSlidersSchema
const actuatorSlidersSchema = Schema(
  { name: { type: String }, state: { type: Number } },
  { timestamps: true }
);

export default model("ActuatorSliders", actuatorSlidersSchema);
