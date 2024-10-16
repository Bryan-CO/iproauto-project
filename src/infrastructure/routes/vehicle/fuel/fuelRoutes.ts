import { Router } from 'express'
import { TryCatch } from '../../../../shared/TryCatch'
import { VehicleFuelController } from '../../../controllers/vehicle/fuel/fuelController'

// eslint-disable-next-line
export class FuelRouter {
  static getRoutes (): Router {
    const router = Router()
    router.get('/', TryCatch.handler(VehicleFuelController.getAllVehicleFuels))
    return router
  }
}
