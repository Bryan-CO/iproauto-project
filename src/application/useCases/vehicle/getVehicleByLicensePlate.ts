import { Vehicle } from '../../../domain/entities/vehicle/Vehicle'
import { IVehicleRepository } from '../../../domain/repositories/vehicle/vehicle.repo'
import { IGetVehicleByLicensePlate } from '../../../domain/useCases/vehicle/getVehicleByLicensePlate'

export class GetVehicleByLicensePlate implements IGetVehicleByLicensePlate {
  private readonly vehicleRepository: IVehicleRepository

  constructor (vehicleRepository: IVehicleRepository) {
    this.vehicleRepository = vehicleRepository
  }

  async execute (licensePlate: string): Promise<Vehicle> {
    const vehicle = await this.vehicleRepository.getVehicleByLicensePlate(licensePlate)
    if (vehicle === null) throw new Error('No se encontró el vehículo')
    return vehicle
  }
}
