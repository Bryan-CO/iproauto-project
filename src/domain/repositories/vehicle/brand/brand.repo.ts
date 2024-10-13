import { VehicleBrand } from '../../../entities/vehicle/Brand'

export interface IVehicleBrandRepository {
  getAllBrands: () => Promise<VehicleBrand[]>
  addBrand: (dto: VehicleBrand) => Promise<VehicleBrand>
}
