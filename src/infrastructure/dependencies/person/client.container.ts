import * as awilix from 'awilix'
import { dbClient } from '../db/dbContainer'
import { ClientDataSource } from '../../datasources/person/client.datasource.impl'
import { ClientRepository } from '../../repositories/person/client.repo.impl'
import { GetClientsSummary } from '../../../application/useCases/person/getClientsSummary'
import { GetDocumentTypes } from '../../../application/useCases/person/getDocumentTypes'

export const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.CLASSIC
})

container.register({
  databaseClient: awilix.asValue(dbClient),
  clientDataSource: awilix.asClass(ClientDataSource),
  clientRepository: awilix.asClass(ClientRepository),
  getClientsSummary: awilix.asClass(GetClientsSummary),
  getDocumentTypes: awilix.asClass(GetDocumentTypes)
})

const getClientsSummary = container.resolve<GetClientsSummary>('getClientsSummary')
const getDocumentTypes = container.resolve<GetDocumentTypes>('getDocumentTypes')
export { getDocumentTypes, getClientsSummary }
