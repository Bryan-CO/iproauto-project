import * as awilix from 'awilix'
import { dbClient } from '../../db/dbContainer'
import { VehicleFuelDatasource } from '../../../datasources/vehicle/fuel/fuel.datasource.impl'
import { GetVehicleFuels } from '../../../../application/useCases/vehicle/fuel/getFuels.impl'
import { VehicleFuelRepository } from '../../../repositories/vehicle/fuel/fuel.repo.impl'
const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.CLASSIC // Para no usar constructor({name}), sino constructor(name)
})

container.register({
  dbClient: awilix.asValue(dbClient),
  vehicleFuelDatasource: awilix.asClass(VehicleFuelDatasource),
  vehicleFuelRepository: awilix.asClass(VehicleFuelRepository),
  getVehicleFuels: awilix.asClass(GetVehicleFuels)
})

const getVehicleFuels = container.resolve<GetVehicleFuels>('getVehicleFuels')

export {
  getVehicleFuels
}
