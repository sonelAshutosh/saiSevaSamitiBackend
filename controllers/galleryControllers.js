import Gallary from '../models/Gallery.js'

export const getAllGalleryImages = async (req, res) => {
  try {
    const images = await Gallary.find()
    res.status(200).json({ images })
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}
// TODO: Change the spelling of Gallary in the mongodb

export const createGalleryImage = async (req, res) => {
  const { imgTitle, description, image } = req.body
  try {
    const newImage = new Gallary({ imgTitle, description, image })
    await newImage.save()
    res.status(200).json({ newImage })
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export const deleteGalleryImage = async (req, res) => {
  const { id } = req.params
  try {
    const image = await Gallary.findByIdAndDelete(id)
    return res.status(200).json({ image })
  } catch (error) {
    return res.status(404).json({ message: error.message })
  }
}
