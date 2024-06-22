import Donator from '../models/Donators.js'

export const getAllDonators = async (req, res) => {
  try {
    const donators = await Donator.find()
    res.status(200).json({ donators })
  } catch (error) {
    res.status(404).json({ message: 'Error Occoured' })
  }
}

export const getVerifiedDonators = async (req, res) => {
  try {
    const donators = await Donator.find({ isVerified: true })
    res.status(200).json({ donators })
  } catch (error) {
    res.status(404).json({ message: 'Error Occoured' })
  }
}

export const getUnverifiedDonators = async (req, res) => {
  try {
    const donators = await Donator.find({ isVerified: false })
    res.status(200).json({ donators })
  } catch (error) {
    res.status(404).json({ message: 'Error Occoured' })
  }
}

export const createDonator = async (req, res) => {
  const { name, email, phone, amount, paymentMode, transactionId } = req.body
  try {
    const donator = await Donator.create({
      name,
      email,
      phone,
      amount,
      paymentMode,
      transactionId,
    })
    res.status(200).json({ donator })
  } catch (error) {
    res.status(404).json({ message: 'Error Occoured' })
  }
}

export const updateDonator = async (req, res) => {
  const { id } = req.params
  const { isVerified } = req.body
  try {
    const donator = await Donator.findByIdAndUpdate(id, { isVerified })
    res.status(200).json({ donator })
  } catch (error) {
    res.status(404).json({ message: 'Error Occoured' })
  }
}
