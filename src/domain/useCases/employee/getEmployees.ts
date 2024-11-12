import { Employee } from '../../entities/persons/Employee'

export interface IGetEmployees {
  execute: () => Promise<Employee[]>
}
