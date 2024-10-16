import { DbToVehicleFuels } from '../../../../adapters/mappers/vehicle/fuel/fuel.mapper'
import { IVehicleFuelDatasource } from '../../../../domain/datasources/vehicle/fuel/fuel.datasource'
import { VehicleFuel } from '../../../../domain/entities/vehicle/Fuel'
import { IVehicleFuelRepository } from '../../../../domain/repositories/vehicle/fuel/fuel.repo'

export class VehicleFuelRepository implements IVehicleFuelRepository {
  constructor (private readonly vehicleFuelDatasource: IVehicleFuelDatasource) {
    this.vehicleFuelDatasource = vehicleFuelDatasource
  }

  async getAllFuels (): Promise<VehicleFuel[]> {
    const fuels = await this.vehicleFuelDatasource.getAllFuels()
    return DbToVehicleFuels(fuels)
  }
}
