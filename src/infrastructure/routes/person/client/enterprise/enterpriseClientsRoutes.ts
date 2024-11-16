import { Router } from 'express'
import { TryCatch } from '../../../../../shared/TryCatch'
import { ClientController } from '../../../../controllers/person/client/clientController'
import { addEnterpriseClientValidator } from '../../../../validators/client/client.validor'
import { ValidationRequest } from '../../../../middlewares/ValidationRequest'

// eslint-disable-next-line
export class EnterpriseClientsRouter {
  static getRoutes (): Router {
    const router = Router()
    router.post('/', addEnterpriseClientValidator, ValidationRequest, TryCatch.handler(ClientController.addEnterpriseClient))
    router.get('/:idEnterpriseClient', TryCatch.handler(ClientController.getEnterpriseClientById))
    return router
  }
}
