import { Router } from 'express'
import { BrandController } from '../../../controllers'

// eslint-disable-next-line
export class BrandRouter {
  static getRoutes (): Router {
    const router = Router()
    router.get('/', BrandController.getAllVehicleBrands)
    router.post('/', BrandController.addVehicleBrand)
    return router
  }
}
