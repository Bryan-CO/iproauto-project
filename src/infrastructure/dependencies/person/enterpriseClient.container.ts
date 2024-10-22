import * as awilix from 'awilix'
import { dbClient } from '../db/dbContainer'
import { EnterpriseClientDataSource } from '../../datasources/person/enterpriseClient.datasource.impl'
import { EnterpriseClientRepository } from '../../repositories/person/enterpriseClient.repo.impl'
import { AddEnterpriseClient } from '../../../application/useCases/person/addEnterpriseClient'

export const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.CLASSIC
})

container.register({
  databaseClient: awilix.asValue(dbClient),
  enterpriseClientDatasource: awilix.asClass(EnterpriseClientDataSource),
  enterpriseClientRepository: awilix.asClass(EnterpriseClientRepository),
  addEnterpriseClient: awilix.asClass(AddEnterpriseClient)
})

const addEnterpriseClient = container.resolve<AddEnterpriseClient>('addEnterpriseClient')
export { addEnterpriseClient }
