import { Router } from 'express'
import {
  createVolunteer,
  deleteVolunteer,
  get3Volunteers,
  getAllVolunteers,
  updateVolunteer,
} from '../controllers/volunteerControllers.js'

const volunteersRouter = Router()

volunteersRouter.get('/', getAllVolunteers)
volunteersRouter.get('/3', get3Volunteers)
volunteersRouter.post('/', createVolunteer)
volunteersRouter.put('/:id', updateVolunteer)
volunteersRouter.delete('/:id', deleteVolunteer)

export default volunteersRouter
