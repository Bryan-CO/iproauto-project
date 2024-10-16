import { Router } from 'express'
import { TryCatch } from '../../../../shared/TryCatch'
import { ProvinceController } from '../../../controllers/localization/province/provinceController'
import { DistrictController } from '../../../controllers/localization/district/districtController'

// eslint-disable-next-line
export class ProvinceRouter {
  static getRoutes (): Router {
    const router = Router()
    router.get('/', TryCatch.handler(ProvinceController.getAllProvinces))
    router.get('/:idProvince/districts', TryCatch.handler(DistrictController.getAllDistrictsByProvince))
    return router
  }
}
