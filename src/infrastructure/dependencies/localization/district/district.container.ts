import * as awilix from 'awilix'
import { DistrictDatasource } from '../../../datasources/localization/district/district.datasource.impl'
import { DistrictRepository } from '../../../repositories/localization/district/district.repo.impl'
import { GetDistrictsByProvince } from '../../../../application/useCases/localization/district/getDistrictsByProvince.impl'
import { dbClient } from '../../db/dbContainer'
const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.CLASSIC // Para no usar constructor({name}), sino constructor(name)
})

container.register({
  dbClient: awilix.asValue(dbClient),
  districtDatasource: awilix.asClass(DistrictDatasource),
  districtRepository: awilix.asClass(DistrictRepository),
  getDistrictsByProvince: awilix.asClass(GetDistrictsByProvince)
})

const getDistrictsByProvince = container.resolve<GetDistrictsByProvince>('getDistrictsByProvince')

export {
  getDistrictsByProvince
}
