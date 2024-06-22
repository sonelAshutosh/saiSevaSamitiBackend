import Volunteers from '../models/Volunteers.js'

export const getAllVolunteers = async (req, res) => {
  try {
    const volunteers = await Volunteers.find()
    res.status(200).json({ volunteers })
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

export const createVolunteer = async (req, res) => {
  const volunteer = req.body
  try {
    const newVolunteer = new Volunteers(volunteer)
    await newVolunteer.save()
    return res.status(200).json({ newVolunteer })
  } catch (error) {
    return res.status(404).json({ message: error.message })
  }
}

export const updateVolunteer = async (req, res) => {
  const { id } = req.params
  const volunteer = req.body
  try {
    const updatedVolunteer = await Volunteers.findByIdAndUpdate(id, volunteer, {
      new: true,
    })
    return res.status(200).json({ updatedVolunteer })
  } catch (error) {
    return res.status(404).json({ message: error.message })
  }
}

export const deleteVolunteer = async (req, res) => {
  const { id } = req.params
  try {
    const volunteer = await Volunteers.findByIdAndDelete(id)
    return res.status(200).json({ volunteer })
  } catch (error) {
    return res.status(404).json({ message: error.message })
  }
}
