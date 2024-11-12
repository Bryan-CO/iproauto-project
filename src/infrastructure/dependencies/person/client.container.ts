import * as awilix from 'awilix'
import { dbClient } from '../db/dbContainer'
import { ClientDataSource } from '../../datasources/person/client.datasource.impl'
import { ClientRepository } from '../../repositories/person/client.repo.impl'
import { GetDocumentTypes } from '../../../application/useCases/person/getDocumentTypes'
import { GetClients } from '../../../application/useCases/person/getClients'

export const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.CLASSIC
})

container.register({
  databaseClient: awilix.asValue(dbClient),
  clientDataSource: awilix.asClass(ClientDataSource),
  clientRepository: awilix.asClass(ClientRepository),
  getClients: awilix.asClass(GetClients),
  getDocumentTypes: awilix.asClass(GetDocumentTypes)
})

const getClients = container.resolve<GetClients>('getClients')
const getDocumentTypes = container.resolve<GetDocumentTypes>('getDocumentTypes')
export { getDocumentTypes, getClients }
