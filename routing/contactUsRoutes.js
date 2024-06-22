import { Router } from 'express'
import {
  createContactUsEntry,
  deleteContactUsEntry,
  getAllContactUsDetails,
} from '../controllers/contactUsControllers.js'

const contactUsRouter = Router()

contactUsRouter.get('/', getAllContactUsDetails)
contactUsRouter.post('/', createContactUsEntry)
contactUsRouter.delete('/:id', deleteContactUsEntry)

export default contactUsRouter
