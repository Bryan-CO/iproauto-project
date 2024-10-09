import { Brand } from '../../domain/entities/vehicle/Brand'
import { IBrandRepository } from '../../domain/repositories/brand.repo'

export class BrandRepository implements IBrandRepository {
  async getAllBrands (): Promise<Brand[]> {
    return [
      {
        idBrand: 1,
        name: 'Audi'
      },
      {
        idBrand: 2,
        name: 'BMW'
      },
      {
        idBrand: 3,
        name: 'Mercedes'
      },
      {
        idBrand: 4,
        name: 'Volkswagen'
      },
      {
        idBrand: 5,
        name: 'Porsche'
      }
    ]
  }
}
