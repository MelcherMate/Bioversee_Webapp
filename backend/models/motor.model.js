import mongoose, { model } from 'mongoose';
const { Schema } = mongoose;

// # motorSchema
const motorSchema = Schema(
  {
    motor: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export default model('Motor', motorSchema);