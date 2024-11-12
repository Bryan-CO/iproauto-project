import { IDatabaseClient } from '../../../adapters/interfaces/databaseClient'
import { IVehicleDataSource } from '../../../domain/datasources/vehicle/vehicle.datasource'
import { Vehicle } from '../../../domain/entities/vehicle/Vehicle'

export class VehicleDatasource implements IVehicleDataSource {
  private readonly databaseClient: IDatabaseClient
  constructor (databaseClient: IDatabaseClient) {
    this.databaseClient = databaseClient
  }

  async getVehicleByLicensePlate (licensePlate: string): Promise<Vehicle> {
    const vehicle = await this.databaseClient.executeProcedure<Vehicle>({
      nameProcedure: 'get_vehicles_by_license_plate',
      parameters: [licensePlate],
      onRow: true
    })
    return vehicle
  }

  async addVehicle (vehicle: Vehicle): Promise<Vehicle> {
    const addedVehicle = await this.databaseClient.executeProcedure<Vehicle>({
      nameProcedure: 'add_vehicle',
      parameters: [
        vehicle.getLicensePlate(),
        vehicle.getBrand()?.getIdBrand(),
        vehicle.getModel()?.getIdModel(),
        vehicle.getColor()?.getIdColor(),
        vehicle.getYear(),
        vehicle.getEngineCapacity(),
        vehicle.getChassisNumber(),
        vehicle.getFuel()?.getIdFuel(),
        vehicle.getObservations(),
        vehicle.getUrlImage(),
        vehicle.getClient()?.idPerson
      ],
      onRow: true
    })
    return addedVehicle
  }

  async editVehicle (vehicle: Vehicle): Promise<Vehicle> {
    const addedVehicle = await this.databaseClient.executeProcedure<Vehicle>({
      nameProcedure: 'update_vehicle',
      parameters: [
        vehicle.getIdVehicle(),
        vehicle.getLicensePlate(),
        vehicle.getBrand()?.getIdBrand(),
        vehicle.getModel()?.getIdModel(),
        vehicle.getColor()?.getIdColor(),
        vehicle.getYear(),
        vehicle.getEngineCapacity(),
        vehicle.getChassisNumber(),
        vehicle.getFuel()?.getIdFuel(),
        vehicle.getObservations(),
        vehicle.getUrlImage(),
        vehicle.getClient()?.idPerson
      ],
      onRow: true
    })
    return addedVehicle
  }
}
