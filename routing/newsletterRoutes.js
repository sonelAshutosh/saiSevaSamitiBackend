import { Router } from 'express'
import {
  getAllNewsletterSubscribers,
  subscribeToNewsletter,
} from '../controllers/newsletterControllers.js'

const newsletterRouter = Router()

newsletterRouter.get('/', getAllNewsletterSubscribers)
newsletterRouter.post('/', subscribeToNewsletter)

export default newsletterRouter
