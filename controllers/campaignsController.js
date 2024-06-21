import Campaigns from '../models/Campaigns.js'

export const getAllCampaigns = async (req, res) => {
  try {
    const campaigns = await Campaigns.find()
    res.status(200).json({ campaigns })
  } catch (error) {
    res.status(404).json({ message: 'Error Occoured' })
  }
}
