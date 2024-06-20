import mongoose, { model } from 'mongoose'

const ActivitiesNumberSchema = new mongoose.Schema({
  happyPeople: {
    type: Number,
    default: 0,
  },
  offices: {
    type: Number,
    default: 0,
  },
  staff: {
    type: Number,
    default: 0,
  },
  volunteers: {
    type: Number,
    default: 0,
  },
})

export default mongoose.models.ActivitiesNumber ||
  model('ActivitiesNumber', ActivitiesNumberSchema)
