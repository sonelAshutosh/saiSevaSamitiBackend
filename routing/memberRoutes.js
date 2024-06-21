import { Router } from 'express'
import { getAllMembers } from '../controllers/memberControllers.js'

const memberRouter = Router()

memberRouter.get('/', getAllMembers)

export default memberRouter
