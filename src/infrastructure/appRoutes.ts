import { Router } from 'express'
import { VehicleRouter } from './routes'

// eslint-disable-next-line
export class AppRoutes {
  static getRoutes (): Router {
    const router = Router()
    router.use('/vehicles', VehicleRouter.getRoutes())
    return router
  }
}
