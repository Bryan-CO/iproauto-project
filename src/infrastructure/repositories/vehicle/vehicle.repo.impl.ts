import { DbToVehicle } from '../../../adapters/mappers/vehicle/vehicle.mapper'
import { IVehicleDataSource } from '../../../domain/datasources/vehicle/vehicle.datasource'
import { Vehicle } from '../../../domain/entities/vehicle/Vehicle'
import { IVehicleRepository } from '../../../domain/repositories/vehicle/vehicle.repo'

export class VehicleRepository implements IVehicleRepository {
  private readonly vehicleDatasource: IVehicleDataSource

  constructor (vehicleDatasource: IVehicleDataSource) {
    this.vehicleDatasource = vehicleDatasource
  }

  async getVehicleByLicensePlate (licensePlate: string): Promise<Vehicle | null> {
    const vehicle = await this.vehicleDatasource.getVehicleByLicensePlate(licensePlate)
    return vehicle !== undefined ? DbToVehicle(vehicle) : null
  }

  async addVehicle (vehicle: Vehicle): Promise<Vehicle> {
    const addedVehicle = await this.vehicleDatasource.addVehicle(vehicle)
    return DbToVehicle(addedVehicle)
  }

  async editVehicle (vehicle: Vehicle): Promise<Vehicle> {
    const updatedVehicle = await this.vehicleDatasource.editVehicle(vehicle)
    return DbToVehicle(updatedVehicle)
  }
}
