import { Router } from 'express'
import {
  createGalleryImage,
  deleteGalleryImage,
  getAllGalleryImages,
} from '../controllers/galleryControllers.js'

const galleryRouter = Router()

galleryRouter.get('/', getAllGalleryImages)
galleryRouter.post('/', createGalleryImage)
galleryRouter.delete('/:id', deleteGalleryImage)

export default galleryRouter
