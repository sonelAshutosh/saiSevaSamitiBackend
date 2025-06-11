import Members from '../models/Members.js'

export const getAllMembers = async (req, res) => {
  try {
    const members = await Members.find()
    res.status(200).json({ members })
  } catch (error) {
    res.status(404).json({ message: 'Error Occoured' })
  }
}

export const getTopThreeMembers = async (req, res) => {
  try {
    const members = await Members.find().sort({ priority: 1 }).limit(3)
    res.status(200).json({ members })
  } catch (error) {
    res.status(404).json({ message: 'Error Occoured' })
  }
}

export const createMember = async (req, res) => {
  const {
    name,
    email,
    phone,
    designation,
    fbURL,
    twitterURL,
    linkedinURL,
    instagramURL,
    image,
  } = req.body

  try {
    const member = await Members.create({
      name,
      email,
      phone,
      designation,
      fbURL,
      twitterURL,
      linkedinURL,
      instagramURL,
      image,
    })
    member.save()

    return res.status(200).json({ member })
  } catch (error) {
    return res.status(404).json({ message: 'Error Occoured' })
  }
}

export const updateMember = async (req, res) => {
  const { id } = req.params
  const {
    name,
    email,
    phone,
    designation,
    fbURL,
    twitterURL,
    linkedinURL,
    instagramURL,
    isActive,
    image,
    joiningDate,
    priority,
  } = req.body
  try {
    const member = await Members.findOneAndUpdate(
      { _id: id },
      {
        name,
        email,
        phone,
        designation,
        fbURL,
        twitterURL,
        linkedinURL,
        instagramURL,
        isActive,
        image,
        joiningDate,
        priority,
      }
    )
    return res.status(200).json({ member })
  } catch (error) {
    return res.status(404).json({ message: 'Error Occoured' })
  }
}

export const deleteMember = async (req, res) => {
  const { id } = req.params
  try {
    const user = await Members.findByIdAndDelete(id)
    return res.status(200).json({ user })
  } catch (error) {
    return res.status(404).json({ message: 'Error Occoured' })
  }
}
