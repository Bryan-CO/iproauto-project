import * as awilix from 'awilix'
import { GetAllProvinces } from '../../../../application/useCases/localization/province/getAllProvinces.impl'
import { ProvinceDatasource } from '../../../datasources/localization/province/province.datasource.impl'
import { ProvinceRepository } from '../../../repositories/localization/province/province.repo.impl'
import { dbClient } from '../../db/dbContainer'
const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.CLASSIC // Para no usar constructor({name}), sino constructor(name)
})

container.register({
  dbClient: awilix.asValue(dbClient),
  provinceDatasource: awilix.asClass(ProvinceDatasource),
  provinceRepository: awilix.asClass(ProvinceRepository),
  getAllProvinces: awilix.asClass(GetAllProvinces)
})

const getAllProvinces = container.resolve<GetAllProvinces>('getAllProvinces')

export {
  getAllProvinces
}
