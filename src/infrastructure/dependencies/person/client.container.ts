import * as awilix from 'awilix'
import { dbClient } from '../db/dbContainer'
import { ClientDataSource } from '../../datasources/person/client.datasource.impl'
import { ClientRepository } from '../../repositories/person/client.repo.impl'
import { GetClientsSummary } from '../../../application/useCases/person/getClientsSummary'

export const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.CLASSIC
})

container.register({
  databaseClient: awilix.asValue(dbClient),
  clientDataSource: awilix.asClass(ClientDataSource),
  clientRepository: awilix.asClass(ClientRepository),
  getClientsSummary: awilix.asClass(GetClientsSummary)
})

const getClientsSummary = container.resolve<GetClientsSummary>('getClientsSummary')
export { getClientsSummary }
