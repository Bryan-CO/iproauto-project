import { Router } from 'express'
import { VehicleController } from '../../controllers'
import { BrandRouter } from './brand/brandRoutes'
import { VehicleModelRouter } from './model/modelRoutes'
import { ColorRouter } from './color/colorRoutes'
import { FuelRouter } from './fuel/fuelRoutes'
import { TryCatch } from '../../../shared/TryCatch'
import { uploadFileMiddleware } from '../../middlewares/FileUploadHandler'
import { addVehicleValidator } from '../../validators/vehicle/vehicle.validator'
import { ValidationRequest } from '../../middlewares/ValidationRequest'
// eslint-disable-next-line
export class VehicleRouter {
  static getRoutes (): Router {
    const router = Router()
    // Ruta anidada para las marcas
    router.use('/brands', BrandRouter.getRoutes())
    router.use('/models', VehicleModelRouter.getRoutes())
    router.use('/colors', ColorRouter.getRoutes())
    router.use('/fuels', FuelRouter.getRoutes())
    router.get('/:licensePlate', TryCatch.handler(VehicleController.getVehicleByLicensePlate))
    router.post('/', uploadFileMiddleware, addVehicleValidator, ValidationRequest, TryCatch.handler(VehicleController.addVehicle))
    return router
  }
}
