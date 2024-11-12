import * as awilix from 'awilix'
import { dbClient } from '../db/dbContainer'
import { ReceptionDataSource } from '../../datasources/reception/reception.datasource.impl'
import { ReceptionRepository } from '../../repositories/reception/reception.repo.impl'
import { GetReceptions } from '../../../application/useCases/receptions/getReceptions'
import { AddReception } from '../../../application/useCases/receptions/addReception'
import { FileStorageDataSource } from '../../datasources/file/fileStorage.datasource.impl'
import { FileStorageRepository } from '../../repositories/file/fileStorage.repo.impl'
import { EditReception } from '../../../application/useCases/receptions/editReception'
import { GetFuelLevels } from '../../../application/useCases/receptions/getFuelLevels'

export const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.CLASSIC
})

container.register({
  databaseClient: awilix.asValue(dbClient),
  receptionDataSource: awilix.asClass(ReceptionDataSource),
  receptionRepository: awilix.asClass(ReceptionRepository),
  fileStorageDataSource: awilix.asClass(FileStorageDataSource).singleton(),
  fileStorageRepository: awilix.asClass(FileStorageRepository).singleton(),
  getReceptions: awilix.asClass(GetReceptions),
  addReception: awilix.asClass(AddReception),
  editReception: awilix.asClass(EditReception),
  getFuelLevels: awilix.asClass(GetFuelLevels)
})

const getReceptions = container.resolve<GetReceptions>('getReceptions')
const addReception = container.resolve<AddReception>('addReception')
const editReception = container.resolve<EditReception>('editReception')
const getFuelLevels = container.resolve<GetFuelLevels>('getFuelLevels')
export { getReceptions, addReception, editReception, getFuelLevels }
