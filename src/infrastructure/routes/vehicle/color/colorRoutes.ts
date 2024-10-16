import { Router } from 'express'
import { TryCatch } from '../../../../shared/TryCatch'
import { VehicleColorController } from '../../../controllers/vehicle/color/colorController'

// eslint-disable-next-line
export class ColorRouter {
  static getRoutes (): Router {
    const router = Router()
    router.get('/', TryCatch.handler(VehicleColorController.getAllVehicleColors))
    return router
  }
}
