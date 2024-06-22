import { Router } from 'express'
import {
  createCertificate,
  deleteCertificate,
  getAllCertificates,
} from '../controllers/certificateControllers.js'

const certificateRouter = Router()

certificateRouter.get('/', getAllCertificates)
certificateRouter.post('/', createCertificate)
certificateRouter.delete('/:id', deleteCertificate)

export default certificateRouter
