import ContactUs from '../models/ContactUs.js'

export const getAllContactUsDetails = async (req, res) => {
  try {
    const entries = await ContactUs.find()
    res.status(200).json({ entries })
  } catch (error) {
    res.status(404).json({ message: 'Error Occoured' })
  }
}

export const createContactUsEntry = async (req, res) => {
  const { name, email, subject, message } = req.body
  try {
    const entry = await ContactUs.create({
      name,
      email,
      subject,
      message,
    })
    res.status(200).json({ entry })
  } catch (error) {
    res.status(404).json({ message: 'Error Occoured' })
  }
}

export const deleteContactUsEntry = async (req, res) => {
  const { id } = req.params
  try {
    const entry = await ContactUs.findByIdAndDelete(id)
    return res.status(200).json({ entry })
  } catch (error) {
    return res.status(404).json({ message: 'Error Occoured' })
  }
}
