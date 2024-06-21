import Members from '../models/Members.js'

export const getAllMembers = async (req, res) => {
  try {
    const members = await Members.find()
    res.status(200).json({ members })
  } catch (error) {
    res.status(404).json({ message: 'Error Occoured' })
  }
}
