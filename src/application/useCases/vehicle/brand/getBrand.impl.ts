import { VehicleBrand } from '../../../../domain/entities/vehicle/Brand'
import { IVehicleBrandRepository } from '../../../../domain/repositories/vehicle/brand/brand.repo'
import { IGetVehicleBrands } from '../../../../domain/useCases/vehicle/brand/getBrands'

export class GetVehicleBrands implements IGetVehicleBrands {
  constructor (private readonly brandRepository: IVehicleBrandRepository) {
    this.brandRepository = brandRepository
  }

  async execute (): Promise<VehicleBrand[]> {
    return await this.brandRepository.getAllBrands()
  }
}
