import { DbToVehicleColors } from '../../../../adapters/mappers/vehicle/color/color.mapper'
import { IVehicleColorDatasource } from '../../../../domain/datasources/vehicle/color/color.datasource'
import { VehicleColor } from '../../../../domain/entities/vehicle/Color'
import { IVehicleColorRepository } from '../../../../domain/repositories/vehicle/color/color.repo'

export class VehicleColorRepository implements IVehicleColorRepository {
  private readonly vehicleColorDatasource: IVehicleColorDatasource
  constructor (vehicleColorDatasource: IVehicleColorDatasource) {
    this.vehicleColorDatasource = vehicleColorDatasource
  }

  async getAllColors (): Promise<VehicleColor[]> {
    return DbToVehicleColors(await this.vehicleColorDatasource.getAllColors())
  }
}
