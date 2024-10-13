import { Router } from 'express'
import { VehicleController } from '../../controllers'
import { BrandRouter } from './brand/brandRoutes'
import { VehicleModelRouter } from './model/modelRoutes'

// eslint-disable-next-line
export class VehicleRouter {
  static getRoutes (): Router {
    const router = Router()
    router.get('/', VehicleController.getAllVehicles)

    // Ruta anidada para las marcas
    router.use('/brands', BrandRouter.getRoutes())
    router.use('/models', VehicleModelRouter.getRoutes())
    return router
  }
}
