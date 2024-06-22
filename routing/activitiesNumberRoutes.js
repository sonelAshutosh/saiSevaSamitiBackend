import { Router } from 'express'
import {
  getActivitiesNumber,
  updateActivitiesNumber,
} from '../controllers/activitiesNumberController.js'

const activitiesNumberRouter = Router()

activitiesNumberRouter.get('/', getActivitiesNumber)
activitiesNumberRouter.put('/', updateActivitiesNumber)

export default activitiesNumberRouter
