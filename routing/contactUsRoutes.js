import { Router } from 'express'
import { createContactUsEntry } from '../controllers/contactUsControllers.js'

const contactUsRouter = Router()

contactUsRouter.post('/', createContactUsEntry)

export default contactUsRouter
