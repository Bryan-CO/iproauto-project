import { Employee } from '../../entities/persons/Employee'

export interface IEmployeeRepository {
  getEmployees: () => Promise<Employee []>
}
