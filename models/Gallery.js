import mongoose, { model } from 'mongoose'

const gallerySchema = new mongoose.Schema({
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

export default mongoose.models.Gallery || model('Gallery', gallerySchema)
