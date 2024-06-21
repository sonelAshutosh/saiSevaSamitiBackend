import { Router } from 'express'
import { getAllCertificates } from '../controllers/certificateControllers.js'

const certificateRouter = Router()

certificateRouter.get('/', getAllCertificates)

export default certificateRouter
