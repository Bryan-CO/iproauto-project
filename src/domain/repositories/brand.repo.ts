import { Brand } from '../entities/vehicle/Brand'

export interface IBrandRepository {
  getAllBrands: () => Promise<Brand[]>
}
