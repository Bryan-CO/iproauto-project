import { IDatabaseClient } from '../../../../adapters/interfaces/databaseClient'
import { IVehicleFuelDatasource } from '../../../../domain/datasources/vehicle/fuel/fuel.datasource'
import { VehicleFuel } from '../../../../domain/entities/vehicle/Fuel'

export class VehicleFuelDatasource implements IVehicleFuelDatasource {
  private readonly dbClient: IDatabaseClient
  constructor (dbClient: IDatabaseClient) {
    this.dbClient = dbClient
  }

  async getAllFuels (): Promise<VehicleFuel[]> {
    const fuels = await this.dbClient.executeProcedure<VehicleFuel[]>({
      nameProcedure: 'get_vehicle_fuels'
    })
    return fuels
  }
}
