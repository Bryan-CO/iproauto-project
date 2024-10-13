import { VehicleBrand } from '../../../../domain/entities/vehicle/Brand'
import { IBrandRepository } from '../../../../domain/repositories/vehicle/brand/brand.repo'
import { IGetVehicleBrands } from '../../../../domain/useCases/getBrands'

export class GetVehicleBrands implements IGetVehicleBrands {
  constructor (private readonly brandRepository: IBrandRepository) {
    this.brandRepository = brandRepository
  }

  async execute (): Promise<VehicleBrand[]> {
    return await this.brandRepository.getAllBrands()
  }
}
