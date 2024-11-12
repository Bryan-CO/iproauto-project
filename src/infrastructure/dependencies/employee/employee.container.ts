import * as awilix from 'awilix'
import { dbClient } from '../db/dbContainer'
import { EmployeeDataSource } from '../../datasources/employee/employee.datasource.impl'
import { EmployeeRepository } from '../../repositories/employee/employee.repo.impl'
import { GetEmployees } from '../../../application/useCases/employee/getEmployees'

export const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.CLASSIC
})

container.register({
  databaseClient: awilix.asValue(dbClient),
  employeeDataSource: awilix.asClass(EmployeeDataSource),
  employeeRepository: awilix.asClass(EmployeeRepository),
  getEmployees: awilix.asClass(GetEmployees)
})

const getEmployees = container.resolve<GetEmployees>('getEmployees')
export { getEmployees }
