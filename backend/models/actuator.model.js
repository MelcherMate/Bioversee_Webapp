import mongoose, { model } from 'mongoose';
const { Schema } = mongoose;

// # actuatorSchema
const actuatorSchema = Schema(
  { name: { type: String }, state: { type: Number } },
  { timestamps: true },
);

export default model('Actuator', actuatorSchema);