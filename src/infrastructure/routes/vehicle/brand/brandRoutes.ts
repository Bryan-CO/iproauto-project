import { Router } from 'express'
import { BrandController } from '../../../controllers'
import { VehicleModelController } from '../../../controllers/vehicle/model/modelController'

// eslint-disable-next-line
export class BrandRouter {
  static getRoutes (): Router {
    const router = Router()
    router.get('/', BrandController.getAllVehicleBrands)
    router.get('/:idBrand/models', VehicleModelController.getVehicleModelsByBrandId)
    router.post('/', BrandController.addVehicleBrand)
    return router
  }
}
