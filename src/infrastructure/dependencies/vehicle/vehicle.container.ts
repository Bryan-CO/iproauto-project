import * as awilix from 'awilix'
import { VehicleDatasource } from '../../../infrastructure/datasources/vehicle/vehicle.datasource.impl'
import { VehicleRepository } from '../../../infrastructure/repositories/vehicle/vehicle.repo.impl'
import { dbClient } from '../db/dbContainer'
import { GetVehicleByLicensePlate } from '../../../application/useCases/vehicle/getVehicleByLicensePlate'
import { AddVehicle } from '../../../application/useCases/vehicle/addVehicle'
import { FileStorageRepository } from '../../repositories/file/fileStorage.repo.impl'
import { FileStorageDataSource } from '../../datasources/file/fileStorage.datasource.impl'

const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.CLASSIC // Para no usar constructor({name}), sino constructor(name)
})

container.register({
  databaseClient: awilix.asValue(dbClient),
  vehicleDatasource: awilix.asClass(VehicleDatasource).singleton(),
  vehicleRepository: awilix.asClass(VehicleRepository).singleton(),
  fileStorageDataSource: awilix.asClass(FileStorageDataSource).singleton(),
  fileStorageRepository: awilix.asClass(FileStorageRepository).singleton(),
  getVehicleByLicensePlate: awilix.asClass(GetVehicleByLicensePlate).singleton(),
  addVehicle: awilix.asClass(AddVehicle).singleton()
})

const getVehicleByLicensePlate = container.resolve<GetVehicleByLicensePlate>('getVehicleByLicensePlate')
const addVehicle = container.resolve<AddVehicle>('addVehicle')
export {
  getVehicleByLicensePlate, addVehicle
}
