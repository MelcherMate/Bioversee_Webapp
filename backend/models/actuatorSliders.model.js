import mongoose, { model } from "mongoose";
const { Schema } = mongoose;

// # actuatorSlidersSchema
const actuatorSlidersSchema = Schema(
  { name: { type: String }, state: { type: Number }, userId: { type: String } },
  { timestamps: true }
);

export default model("ActuatorSliders", actuatorSlidersSchema);
