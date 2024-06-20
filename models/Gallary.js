import mongoose, { model } from 'mongoose'

const gallarySchema = new mongoose.Schema({
  imgTitle: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
  image: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
})

export default mongoose.models.Gallary || model('Gallary', gallarySchema)
