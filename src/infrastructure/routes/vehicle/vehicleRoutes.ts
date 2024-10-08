import { Router } from 'express'
import { VehicleController } from '../../controllers'

// eslint-disable-next-line
export class VehicleRouter {
  static getRoutes (): Router {
    const router = Router()
    router.get('/', VehicleController.getAllVehicles)
    return router
  }
}
