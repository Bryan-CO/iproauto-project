import { VehicleModel } from '../../../../domain/entities/vehicle/Model'
import { IVehicleModelRepository } from '../../../../domain/repositories/vehicle/model/model.repo'
import { IAddVehicleModel } from '../../../../domain/useCases/vehicle/model/addModel'
import { AddVehicleModelDto } from '../../../dtos/vehicle/model/addVehicleModel'

export class AddVehicleModel implements IAddVehicleModel {
  constructor (private readonly modelRepository: IVehicleModelRepository) {
    this.modelRepository = modelRepository
  }

  async execute (dto: AddVehicleModelDto): Promise<VehicleModel> {
    const existingModel = await this.modelRepository.findByModel(dto.getName())
    if (existingModel !== undefined) {
      throw new Error('Model already exists')
    }
    const newModel = await this.modelRepository.addModel(dto.toVehicleModel())
    return newModel
  }
}
