import { VehicleModel } from '../../../../domain/entities/vehicle/Model'
import { IVehicleModelRepository } from '../../../../domain/repositories/vehicle/model/model.repo'
import { IGetVehicleModels } from '../../../../domain/useCases/vehicle/model/getModels'

export class GetVehicleModels implements IGetVehicleModels {
  constructor (private readonly modelRepository: IVehicleModelRepository) {
    this.modelRepository = modelRepository
  }

  async execute (): Promise<VehicleModel[]> {
    return await this.modelRepository.getAllModels()
  }
}
