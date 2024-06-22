import Certificate from '../models/Certificates.js'

export const getAllCertificates = async (req, res) => {
  try {
    const certificates = await Certificate.find()
    res.status(200).json({ certificates })
  } catch (error) {
    res.status(404).json({ message: 'Error Occoured' })
  }
}

export const createCertificate = async (req, res) => {
  const { name, image, issuedBy } = req.body
  try {
    const certificate = await Certificate.create({ name, image })
    res.status(200).json({ certificate })
  } catch (error) {
    res.status(404).json({ message: 'Error Occoured' })
  }
}

export const deleteCertificate = async (req, res) => {
  const { id } = req.params
  try {
    const certificate = await Certificate.findByIdAndDelete(id)
    return res.status(200).json({ certificate })
  } catch (error) {
    return res.status(404).json({ message: 'Error Occoured' })
  }
}
