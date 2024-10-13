import { Router } from 'express'
import { VehicleController } from '../../controllers'
import { BrandRouter } from './brand/brandRoutes'

// eslint-disable-next-line
export class VehicleRouter {
  static getRoutes (): Router {
    const router = Router()
    router.get('/', VehicleController.getAllVehicles)

    // Ruta anidada para las marcas
    router.use('/brands', BrandRouter.getRoutes())
    return router
  }
}
