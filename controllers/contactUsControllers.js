import ContactUs from '../models/ContactUs.js'

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
