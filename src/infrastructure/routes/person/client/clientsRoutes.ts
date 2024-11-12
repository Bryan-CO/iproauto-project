import { Router } from 'express'
import { NaturalClientRouter } from './natural/naturalClientsRoutes'
import { ClientController } from '../../../controllers/person/client/clientController'
import { TryCatch } from '../../../../shared/TryCatch'
import { EnterpriseClientsRouter } from './enterprise/enterpriseClientsRoutes'

// eslint-disable-next-line
export class ClientRouter {
  static getRoutes (): Router {
    const router = Router()
    router.get('/', TryCatch.handler(ClientController.getClients))
    router.get('/documents/types', TryCatch.handler(ClientController.getDocumentTypes))
    router.use('/naturals', NaturalClientRouter.getRoutes())
    router.use('/enterprises', EnterpriseClientsRouter.getRoutes())
    return router
  }
}
