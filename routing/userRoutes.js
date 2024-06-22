import { Router } from 'express'
import {
  authenticateUser,
  createUser,
  deleteUser,
  getAllUsers,
  updateUser,
} from '../controllers/userControllers.js'

const userRouter = Router()

userRouter.get('/', getAllUsers)
userRouter.post('/', createUser)
userRouter.put('/:id', updateUser)
userRouter.delete('/:id', deleteUser)

userRouter.post('/auth', authenticateUser)

export default userRouter
