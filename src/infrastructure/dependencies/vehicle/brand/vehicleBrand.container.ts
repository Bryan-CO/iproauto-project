import * as awilix from 'awilix'
import { VehicleBrandDatasource } from '../../../datasources'
import { VehicleBrandRepository } from '../../../repositories'
import { GetVehicleBrands } from '../../../../application/useCases/vehicle/brand/getBrand.impl'
import { AddVehicleBrand } from '../../../../application/useCases/vehicle/brand/addVehicleBrand.impl'
import { dbClient } from '../../db/dbContainer'
const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.CLASSIC // Para no usar constructor({name}), sino constructor(name)
})

container.register({
  dbClient: awilix.asValue(dbClient),
  brandDatasource: awilix.asClass(VehicleBrandDatasource),
  brandRepository: awilix.asClass(VehicleBrandRepository),
  getVehicleBrands: awilix.asClass(GetVehicleBrands),
  addVehicleBrand: awilix.asClass(AddVehicleBrand)
})

const getVehicleBrands = container.resolve<GetVehicleBrands>('getVehicleBrands')
const addVehicleBrand = container.resolve<AddVehicleBrand>('addVehicleBrand')

export {
  getVehicleBrands,
  addVehicleBrand
}
