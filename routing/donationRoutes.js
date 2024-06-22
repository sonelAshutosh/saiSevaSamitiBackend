import { Router } from 'express'
import {
  createDonator,
  getAllDonators,
  getUnverifiedDonators,
  getVerifiedDonators,
  updateDonator,
} from '../controllers/donationControllers.js'

const donationRouter = Router()

donationRouter.get('/', getAllDonators)
donationRouter.get('/verified', getVerifiedDonators)
donationRouter.get('/unverified', getUnverifiedDonators)

donationRouter.post('/', createDonator)
donationRouter.put('/:id', updateDonator)

export default donationRouter
