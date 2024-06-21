import Certificate from '../models/Certificates.js'

export const getAllCertificates = async (req, res) => {
  try {
    const certificates = await Certificate.find()
    res.status(200).json({ certificates })
  } catch (error) {
    res.status(404).json({ message: 'Error Occoured' })
  }
}
