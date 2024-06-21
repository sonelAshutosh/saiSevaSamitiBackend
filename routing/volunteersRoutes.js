import { Router } from 'express'
import {
  get3Volunteers,
  getAllVolunteers,
} from '../controllers/volunteerControllers.js'

const volunteersRouter = Router()

volunteersRouter.get('/', getAllVolunteers)
volunteersRouter.get('/3', get3Volunteers)

export default volunteersRouter
