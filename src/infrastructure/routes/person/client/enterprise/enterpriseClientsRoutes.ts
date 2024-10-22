import { Router } from 'express'
import { TryCatch } from '../../../../../shared/TryCatch'
import { ClientController } from '../../../../controllers/person/client/clientController'

// eslint-disable-next-line
export class EnterpriseClientsRouter {
  static getRoutes (): Router {
    const router = Router()
    router.post('/', TryCatch.handler(ClientController.addEnterpriseClient))
    router.get('/:idEnterpriseClient', TryCatch.handler(ClientController.getEnterpriseClientById))
    return router
  }
}
