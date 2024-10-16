import { IDatabaseClient } from '../../../../adapters/interfaces/databaseClient'
import { IVehicleColorDatasource } from '../../../../domain/datasources/vehicle/color/color.datasource'
import { VehicleColor } from '../../../../domain/entities/vehicle/Color'

export class VehicleColorDatasource implements IVehicleColorDatasource {
  private readonly dbClient: IDatabaseClient
  constructor (dbClient: IDatabaseClient) {
    this.dbClient = dbClient
  }

  async getAllColors (): Promise<VehicleColor[]> {
    const colors = await this.dbClient.executeProcedure<VehicleColor[]>({
      nameProcedure: 'get_vehicle_colors'
    })
    return colors
  }
}
