import { Router } from 'express'
import { VehicleModelController } from '../../../controllers/vehicle/model/modelController'

// eslint-disable-next-line
export class VehicleModelRouter {
  static getRoutes (): Router {
    const router = Router()
    router.get('/', VehicleModelController.getAllVehicleModels)
    return router
  }
}
