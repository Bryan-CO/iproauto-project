import { Router } from 'express'
import { ClientController } from '../../../../controllers/person/client/clientController'
import { TryCatch } from '../../../../../shared/TryCatch'
import { addNaturalClientValidator } from '../../../../validators/client/client.validor'
import { ValidationRequest } from '../../../../middlewares/ValidationRequest'

// eslint-disable-next-line
export class NaturalClientRouter {
  static getRoutes (): Router {
    const router = Router()
    router.post('/', addNaturalClientValidator, ValidationRequest, TryCatch.handler(ClientController.addNaturalClient))
    router.get('/:idNaturalClient', TryCatch.handler(ClientController.getNaturalClientById))
    return router
  }
}
