import { Router } from 'express'
import { BrandController } from '../../controllers/brand/brandController'

// eslint-disable-next-line
export class BrandRouter {
  static getRoutes (): Router {
    const router = Router()
    router.get('/', BrandController.getAllBrands)
    return router
  }
}
