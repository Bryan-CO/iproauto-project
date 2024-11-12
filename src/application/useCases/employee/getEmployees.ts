import { Employee } from '../../../domain/entities/persons/Employee'
import { IEmployeeRepository } from '../../../domain/repositories/employee/employee.repo'
import { IGetEmployees } from '../../../domain/useCases/employee/getEmployees'

export class GetEmployees implements IGetEmployees {
  private readonly employeeRepository: IEmployeeRepository

  constructor (employeeRepository: IEmployeeRepository) {
    this.employeeRepository = employeeRepository
  }

  async execute (): Promise<Employee[]> {
    return await this.employeeRepository.getEmployees()
  }
}
