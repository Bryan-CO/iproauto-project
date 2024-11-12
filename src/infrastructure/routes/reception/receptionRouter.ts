import { Router } from 'express'
import { ReceptionController } from '../../controllers/reception/receptionController'
import { TryCatch } from '../../../shared/TryCatch'
import { uploadFileMiddleware } from '../../middlewares/FileUploadHandler'
import { addReceptionValidator, updateReceptionValidator } from '../../validators/reception/reception.validator'
import { ValidationRequest } from '../../middlewares/ValidationRequest'

// eslint-disable-next-line
export class ReceptionRouter {
  static getRoutes (): Router {
    const router = Router()
    router.get('/', TryCatch.handler(ReceptionController.getReceptions))
    router.post('/', uploadFileMiddleware, addReceptionValidator, ValidationRequest, TryCatch.handler(ReceptionController.addReception))
    router.patch('/:id', uploadFileMiddleware, updateReceptionValidator, ValidationRequest, TryCatch.handler(ReceptionController.updateReception))
    router.get('/fuel-levels', TryCatch.handler(ReceptionController.getFuelLevels))
    return router
  }
}
