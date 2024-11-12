import { Router } from 'express'
import { VehicleModelController } from '../../../controllers/vehicle/model/modelController'
import { TryCatch } from '../../../../shared/TryCatch'
import { addVehicleModelValidator } from '../../../validators/vehicle/model/vehicleModel.validator'
import { ValidationRequest } from '../../../middlewares/ValidationRequest'

// eslint-disable-next-line
export class VehicleModelRouter {
  static getRoutes (): Router {
    const router = Router()
    router.get('/', TryCatch.handler(VehicleModelController.getAllVehicleModels))
    router.post('/', addVehicleModelValidator, ValidationRequest, TryCatch.handler(VehicleModelController.addVehicleModel))
    return router
  }
}
