import { Router } from 'express'
import {
  createMember,
  deleteMember,
  getAllMembers,
  updateMember,
} from '../controllers/memberControllers.js'

const memberRouter = Router()

memberRouter.get('/', getAllMembers)
memberRouter.post('/', createMember)
memberRouter.put('/:id', updateMember)
memberRouter.delete('/:id', deleteMember)

export default memberRouter
