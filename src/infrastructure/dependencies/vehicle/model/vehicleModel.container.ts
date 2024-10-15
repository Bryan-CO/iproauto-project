import * as awilix from 'awilix'
import { dbClient } from '../../db/dbContainer'
import { VehicleModelDatasource } from '../../../datasources/vehicle/model/model.datasource.impl'
import { VehicleModelRepository } from '../../../repositories/vehicle/model/model.repo.impl'
import { GetVehicleModels } from '../../../../application/useCases/vehicle/model/getModels.impl'
import { GetVehicleModelsByBrandId } from '../../../../application/useCases/vehicle/model/getModelsByBrandId'
const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.CLASSIC // Para no usar constructor({name}), sino constructor(name)
})

container.register({
  dbClient: awilix.asValue(dbClient),
  modelDatasource: awilix.asClass(VehicleModelDatasource),
  modelRepository: awilix.asClass(VehicleModelRepository),
  getVehicleModels: awilix.asClass(GetVehicleModels),
  getVehicleModelsByBrandId: awilix.asClass(GetVehicleModelsByBrandId)
})

const getVehicleBrands = container.resolve<GetVehicleModels>('getVehicleModels')
const getVehicleModelsByBrandId = container.resolve<GetVehicleModelsByBrandId>('getVehicleModelsByBrandId')

export {
  getVehicleBrands,
  getVehicleModelsByBrandId
}
