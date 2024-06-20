import { Router } from 'express'
import { getAllUsers } from '../controllers/userControllers.js'

const userRouter = Router()

userRouter.get('/', getAllUsers)

export default userRouter
