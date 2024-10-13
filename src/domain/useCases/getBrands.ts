import { VehicleBrand } from '../entities/vehicle/Brand'

export interface IGetVehicleBrands {
  execute: () => Promise<VehicleBrand[]>
}
