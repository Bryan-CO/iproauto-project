import { VehicleFuel } from '../../../../domain/entities/vehicle/Fuel'
import { IVehicleFuelRepository } from '../../../../domain/repositories/vehicle/fuel/fuel.repo'
import { IGetVehicleFuels } from '../../../../domain/useCases/vehicle/fuel/getFuels'

export class GetVehicleFuels implements IGetVehicleFuels {
  private readonly vehicleFuelRepository: IVehicleFuelRepository
  constructor (vehicleFuelRepository: IVehicleFuelRepository) {
    this.vehicleFuelRepository = vehicleFuelRepository
  }

  async execute (): Promise<VehicleFuel[]> {
    return await this.vehicleFuelRepository.getAllFuels()
  }
}
