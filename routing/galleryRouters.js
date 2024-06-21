import { Router } from 'express'
import { getAllGalleryImages } from '../controllers/galleryControllers.js'

const galleryRouter = Router()

galleryRouter.get('/', getAllGalleryImages)

export default galleryRouter
