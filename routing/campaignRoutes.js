import { Router } from 'express'
import {
  createCampaign,
  deleteCampaign,
  getAllCampaigns,
} from '../controllers/campaignsController.js'

const campaignsRouter = Router()

campaignsRouter.get('/', getAllCampaigns)
campaignsRouter.post('/', createCampaign)
campaignsRouter.delete('/:id', deleteCampaign)

export default campaignsRouter
