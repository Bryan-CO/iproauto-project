import { Router } from 'express'
import { VehicleController } from '../../controllers'
import { BrandRouter } from './brand/brandRoutes'
import { VehicleModelRouter } from './model/modelRoutes'
import { ColorRouter } from './color/colorRoutes'
import { FuelRouter } from './fuel/fuelRoutes'

// eslint-disable-next-line
export class VehicleRouter {
  static getRoutes (): Router {
    const router = Router()
    router.get('/', VehicleController.getAllVehicles)

    // Ruta anidada para las marcas
    router.use('/brands', BrandRouter.getRoutes())
    router.use('/models', VehicleModelRouter.getRoutes())
    router.use('/colors', ColorRouter.getRoutes())
    router.use('/fuels', FuelRouter.getRoutes())
    return router
  }
}
