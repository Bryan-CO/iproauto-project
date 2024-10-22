import { Router } from 'express'
import { ClientController } from '../../../../controllers/person/client/clientController'
import { TryCatch } from '../../../../../shared/TryCatch'

// eslint-disable-next-line
export class NaturalClientRouter {
  static getRoutes (): Router {
    const router = Router()
    router.post('/', TryCatch.handler(ClientController.addNaturalClient))
    return router
  }
}
