import { Router } from 'express'
import { NaturalClientRouter } from './natural/naturalClientsRoutes'
import { ClientController } from '../../../controllers/person/client/clientController'
import { TryCatch } from '../../../../shared/TryCatch'
import { EnterpriseClientsRouter } from './enterprise/enterpriseClientsRoutes'

// eslint-disable-next-line
export class ClientRouter {
  static getRoutes (): Router {
    const router = Router()
    router.use('/naturals', NaturalClientRouter.getRoutes())
    router.use('/enterprises', EnterpriseClientsRouter.getRoutes())
    router.use('/summary', TryCatch.handler(ClientController.getClientsSummary))
    return router
  }
}
