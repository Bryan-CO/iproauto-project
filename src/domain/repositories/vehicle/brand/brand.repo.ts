import { VehicleBrand } from '../../../entities/vehicle/Brand'

export interface IBrandRepository {
  getAllBrands: () => Promise<VehicleBrand[]>
  addBrand: (dto: VehicleBrand) => Promise<VehicleBrand>
}
