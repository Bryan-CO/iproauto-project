import { Router } from 'express'
import { VehicleRouter } from './routes'
import { LocalizationRouter } from './routes/localization/localizationRoutes'

// eslint-disable-next-line
export class AppRoutes {
  static getRoutes (): Router {
    const router = Router()
    router.use('/vehicles', VehicleRouter.getRoutes())
    router.use('/localization', LocalizationRouter.getRoutes())
    return router
  }
}
