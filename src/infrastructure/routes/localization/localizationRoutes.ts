import { Router } from 'express'
import { ProvinceRouter } from './province/provinceRoutes'

// eslint-disable-next-line
export class LocalizationRouter {
  static getRoutes (): Router {
    const router = Router()
    router.use('/provinces', ProvinceRouter.getRoutes())
    return router
  }
}
