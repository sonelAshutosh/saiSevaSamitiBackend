import Volunteers from '../models/Volunteers.js'

export const getAllVolunteers = async (req, res) => {
  try {
    const volunteers = await Volunteers.find()
    res.status(200).json(volunteers)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const get3Volunteers = async (req, res) => {
  try {
    const volunteers = await Volunteers.find({ showInList: true })
      .sort({ joiningDate: 1 })
      .limit(3)
    res.status(200).json({ volunteers })
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}
