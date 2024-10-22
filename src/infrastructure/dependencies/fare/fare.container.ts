import * as awilix from 'awilix'
import { FareDataSource } from '../../datasources/fare/fare.datasource.impl'
import { FareRepository } from '../../repositories/fare/fare.repo.impl'
import { GetFares } from '../../../application/useCases/fare/getFares.impl'
import { dbClient } from '../db/dbContainer'

export const fareContainer = awilix.createContainer({
  injectionMode: awilix.InjectionMode.CLASSIC
})

fareContainer.register({
  databaseClient: awilix.asValue(dbClient),
  fareDatasource: awilix.asClass(FareDataSource),
  fareRepository: awilix.asClass(FareRepository),
  getFares: awilix.asClass(GetFares)
})

const getFares = fareContainer.resolve<GetFares>('getFares')
export { getFares }
