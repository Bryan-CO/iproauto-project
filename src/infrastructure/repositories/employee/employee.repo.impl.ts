import { DbToEmployees } from '../../../adapters/mappers/employee/employee.mapper'
import { IEmployeeDataSource } from '../../../domain/datasources/employee/employee.datasource'
import { Employee } from '../../../domain/entities/persons/Employee'
import { IEmployeeRepository } from '../../../domain/repositories/employee/employee.repo'

export class EmployeeRepository implements IEmployeeRepository {
  private readonly employeeDataSource: IEmployeeDataSource

  constructor (employeeDataSource: IEmployeeDataSource) {
    this.employeeDataSource = employeeDataSource
  }

  async getEmployees (): Promise<Employee[]> {
    const employees = await this.employeeDataSource.getEmployees()
    return DbToEmployees(employees)
  }
}
