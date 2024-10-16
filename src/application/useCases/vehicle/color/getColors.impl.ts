import { VehicleColor } from '../../../../domain/entities/vehicle/Color'
import { IVehicleColorRepository } from '../../../../domain/repositories/vehicle/color/color.repo'
import { IGetVehicleColors } from '../../../../domain/useCases/vehicle/color/getColor'

export class GetVehicleColors implements IGetVehicleColors {
  constructor (private readonly vehicleColorRepository: IVehicleColorRepository) {
    this.vehicleColorRepository = vehicleColorRepository
  }

  async execute (): Promise<VehicleColor[]> {
    return await this.vehicleColorRepository.getAllColors()
  }
}
