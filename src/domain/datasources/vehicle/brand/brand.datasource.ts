import { VehicleBrand } from '../../../entities/vehicle/Brand'

export interface IVehicleBrandDatasource {
  getAllBrands: () => Promise<VehicleBrand[]>
  addBrand: (dto: VehicleBrand) => Promise<VehicleBrand>
}
