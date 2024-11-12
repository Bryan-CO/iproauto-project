import { Request, Response } from 'express'
import { ResponseModel } from '../../../shared/ResponseModel'
import { getEmployees } from '../../dependencies/employee/employee.container'

// eslint-disable-next-line
export class EmployeeController {
  static async getEmployees (req: Request, res: Response): Promise<void> {
    const employees = await getEmployees.execute()
    ResponseModel.success({ res, data: employees, message: 'Successfully retrieved employees' })
  }
}
