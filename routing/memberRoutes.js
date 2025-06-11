import { Router } from 'express'
import {
  createMember,
  deleteMember,
  getAllMembers,
  getTopThreeMembers,
  updateMember,
} from '../controllers/memberControllers.js'

const memberRouter = Router()

memberRouter.get('/', getAllMembers)
memberRouter.post('/', createMember)
memberRouter.put('/:id', updateMember)
memberRouter.delete('/:id', deleteMember)

memberRouter.get('/getTopThreeMembers', getTopThreeMembers)

export default memberRouter
