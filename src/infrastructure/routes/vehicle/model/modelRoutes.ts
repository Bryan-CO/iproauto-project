import { Router } from 'express'
import { VehicleModelController } from '../../../controllers/vehicle/model/modelController'
import { TryCatch } from '../../../../shared/TryCatch'

// eslint-disable-next-line
export class VehicleModelRouter {
  static getRoutes (): Router {
    const router = Router()
    router.get('/', TryCatch.handler(VehicleModelController.getAllVehicleModels))
    router.post('/', TryCatch.handler(VehicleModelController.addVehicleModel))
    return router
  }
}
