import { Router } from 'express'
import { EmployeeController } from '../../controllers/employee/employee.controller'
import { TryCatch } from '../../../shared/TryCatch'

// eslint-disable-next-line
export class EmployeeRouter {
  static getRoutes (): Router {
    const router = Router()
    router.get('/', TryCatch.handler(EmployeeController.getEmployees))
    return router
  }
}
