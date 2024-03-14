import mongoose, { model } from 'mongoose';
const { Schema } = mongoose;

// # actuatorSchema
const actuatorSchema = Schema(
  { state: { type: Boolean, default: false } },
  { timestamps: true },
);

export default model('Actuator', actuatorSchema);