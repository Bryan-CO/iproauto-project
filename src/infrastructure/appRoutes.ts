import { Router } from 'express'
import { VehicleRouter } from './routes'
import { LocalizationRouter } from './routes/localization/localizationRoutes'
import { ClientRouter } from './routes/person/client/clientsRoutes'
import { FareRouter } from './routes/fare/fareRoutes'

// eslint-disable-next-line
export class AppRoutes {
  static getRoutes (): Router {
    const router = Router()
    router.use('/vehicles', VehicleRouter.getRoutes())
    router.use('/localization', LocalizationRouter.getRoutes())
    router.use('/clients', ClientRouter.getRoutes())
    router.use('/fares', FareRouter.getRoutes())
    return router
  }
}
