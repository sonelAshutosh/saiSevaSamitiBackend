import { Router } from 'express'
import { getActivitiesNumber } from '../controllers/activitiesNumberController.js'

const activitiesNumberRouter = Router()

activitiesNumberRouter.get('/', getActivitiesNumber)

export default activitiesNumberRouter
