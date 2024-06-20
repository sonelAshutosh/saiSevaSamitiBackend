import mongoose, { model } from 'mongoose'

const donatorsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  amount: {
    type: Number,
    required: true,
  },
  paymentMode: {
    type: String,
  },
  transactionId: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
})

export default mongoose.models.Donators || model('Donators', donatorsSchema)
