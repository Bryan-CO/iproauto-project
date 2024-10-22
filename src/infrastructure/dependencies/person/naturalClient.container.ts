import * as awilix from 'awilix'
import { NaturalClientDataSource } from '../../../infrastructure/datasources/person/naturalClient.datasource.impl'
import { dbClient } from '../db/dbContainer'
import { NaturalClientRepository } from '../../repositories/person/naturalClient.repo.impl'
import { AddNaturalClient } from '../../../application/useCases/person/addNaturalClient'
import { GetNaturalClientById } from '../../../application/useCases/person/getNaturalClientById'

export const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.CLASSIC
})

container.register({
  databaseClient: awilix.asValue(dbClient),
  naturalClientDataSource: awilix.asClass(NaturalClientDataSource),
  naturalClientRepository: awilix.asClass(NaturalClientRepository),
  addNaturalClient: awilix.asClass(AddNaturalClient),
  getNaturalClientById: awilix.asClass(GetNaturalClientById)
})

const addNaturalClient = container.resolve<AddNaturalClient>('addNaturalClient')
const getNaturalClientById = container.resolve<GetNaturalClientById>('getNaturalClientById')
export { addNaturalClient, getNaturalClientById }
