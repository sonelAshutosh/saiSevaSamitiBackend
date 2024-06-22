import Campaigns from '../models/Campaigns.js'

export const getAllCampaigns = async (req, res) => {
  try {
    const campaigns = await Campaigns.find()
    res.status(200).json({ campaigns })
  } catch (error) {
    res.status(404).json({ message: 'Error Occoured' })
  }
}

export const createCampaign = async (req, res) => {
  const { name, description, image } = req.body
  try {
    const newCampaign = new Campaigns({ name, description, image })
    await newCampaign.save()
    res.status(200).json({ newCampaign })
  } catch (error) {
    res.status(404).json({ message: 'Error Occoured' })
  }
}

export const deleteCampaign = async (req, res) => {
  const { id } = req.params
  try {
    const campaign = await Campaigns.findByIdAndDelete(id)
    return res.status(200).json({ campaign })
  } catch (error) {
    return res.status(404).json({ message: 'Error Occoured' })
  }
}
