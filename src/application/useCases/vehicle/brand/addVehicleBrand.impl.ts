import { VehicleBrand } from '../../../../domain/entities/vehicle/Brand'
import { IVehicleBrandRepository } from '../../../../domain/repositories/vehicle/brand/brand.repo'
import { IAddVehicleBrand } from '../../../../domain/useCases/vehicle/brand/addVehicleBrand'
import { AddVehicleBrandDto } from '../../../dtos/vehicle/brand/addVehicleBrand'

export class AddVehicleBrand implements IAddVehicleBrand {
  constructor (private readonly brandRepository: IVehicleBrandRepository) {
    this.brandRepository = brandRepository
  }

  async execute (dto: AddVehicleBrandDto): Promise<VehicleBrand> {
    const brand = await this.brandRepository.addBrand(dto.toVehicleBrand())
    return brand
  }
}
