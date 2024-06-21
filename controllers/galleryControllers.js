import Gallary from '../models/Gallary.js'

export const getAllGalleryImages = async (req, res) => {
  try {
    const images = await Gallary.find()
    res.status(200).json({ images })
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}
// TODO: Change the spelling of Gallary in the mongodb
