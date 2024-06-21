import { Router } from 'express'
import { getAllCampaigns } from '../controllers/campaignsController.js'

const campaignsRouter = Router()

campaignsRouter.get('/', getAllCampaigns)

export default campaignsRouter
