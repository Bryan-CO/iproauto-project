import * as awilix from 'awilix'
import { dbClient } from '../../db/dbContainer'
import { VehicleColorDatasource } from '../../../datasources/vehicle/color/color.datasource.impl'
import { GetVehicleColors } from '../../../../application/useCases/vehicle/color/getColors.impl'
import { VehicleColorRepository } from '../../../repositories/vehicle/color/color.repo.impls'
const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.CLASSIC // Para no usar constructor({name}), sino constructor(name)
})

container.register({
  dbClient: awilix.asValue(dbClient),
  vehicleColorDatasource: awilix.asClass(VehicleColorDatasource),
  vehicleColorRepository: awilix.asClass(VehicleColorRepository),
  getVehicleColors: awilix.asClass(GetVehicleColors)
})

const getVehicleColors = container.resolve<GetVehicleColors>('getVehicleColors')

export {
  getVehicleColors
}
