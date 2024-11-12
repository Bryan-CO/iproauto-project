import { IDatabaseClient } from '../../../adapters/interfaces/databaseClient'
import { IEmployeeDataSource } from '../../../domain/datasources/employee/employee.datasource'

export class EmployeeDataSource implements IEmployeeDataSource {
  private readonly databaseClient: IDatabaseClient
  constructor (databaseClient: IDatabaseClient) {
    this.databaseClient = databaseClient
  }

  async getEmployees (): Promise<any> {
    const employees = await this.databaseClient.executeProcedure<any>({
      nameProcedure: 'get_employees'
    })
    return employees
  }
}
