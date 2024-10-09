import { Brand } from '../../domain/entities/vehicle/Brand'
import { IBrandRepository } from '../../domain/repositories/brand.repo'
import { IGetBrands } from '../../domain/useCases/getBrands'

export class GetBrands implements IGetBrands {
  constructor (private readonly brandRepository: IBrandRepository) {
    this.brandRepository = brandRepository
  }

  async execute (): Promise<Brand[]> {
    return await this.brandRepository.getAllBrands()
  }
}
