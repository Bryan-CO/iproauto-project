import { Router } from 'express'
import { BrandController } from '../../../controllers'
import { VehicleModelController } from '../../../controllers/vehicle/model/modelController'
import { TryCatch } from '../../../../shared/TryCatch'

// eslint-disable-next-line
export class BrandRouter {
  static getRoutes (): Router {
    const router = Router()
    router.get('/', TryCatch.handler(BrandController.getAllVehicleBrands))
    router.get('/:idBrand/models', TryCatch.handler(VehicleModelController.getVehicleModelsByBrandId))
    router.post('/', TryCatch.handler(BrandController.addVehicleBrand))
    return router
  }
}
