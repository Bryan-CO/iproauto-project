import { VehicleBrand } from '../../../../domain/entities/vehicle/Brand'
import { IVehicleBrandRepository } from '../../../../domain/repositories/vehicle/brand/brand.repo'
import { IGetVehicleBrands } from '../../../../domain/useCases/vehicle/brand/getBrands'

export class GetVehicleBrands implements IGetVehicleBrands {
  private readonly brandRepository: IVehicleBrandRepository
  constructor (brandRepository: IVehicleBrandRepository) {
    this.brandRepository = brandRepository
  }

  async execute (): Promise<VehicleBrand[]> {
    const brands = await this.brandRepository.getAllBrands()
    return brands
  }
}
