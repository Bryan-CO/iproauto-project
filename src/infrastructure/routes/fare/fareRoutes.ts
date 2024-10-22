import { Router } from 'express'
import { FareController } from '../../controllers/fare/FareController'
import { TryCatch } from '../../../shared/TryCatch'

// eslint-disable-next-line
export class FareRouter {
  static getRoutes (): Router {
    const router = Router()
    router.get('/', TryCatch.handler(FareController.getFares))
    return router
  }
}
