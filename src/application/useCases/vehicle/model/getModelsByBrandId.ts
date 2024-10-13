import { VehicleModel } from '../../../../domain/entities/vehicle/Model'
import { IVehicleModelRepository } from '../../../../domain/repositories/vehicle/model/model.repo'
import { IGetVehicleModelsByBrandId } from '../../../../domain/useCases/vehicle/model/getModelsByIdBrand'

export class GetVehicleModelsByBrandId implements IGetVehicleModelsByBrandId {
  constructor (private readonly modelRepository: IVehicleModelRepository) {
    this.modelRepository = modelRepository
  }

  async execute (idBrand: number): Promise<VehicleModel[]> {
    return await this.modelRepository.getModelsByBrandId(idBrand)
  }
}
