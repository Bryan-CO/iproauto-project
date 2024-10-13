import { VehicleModel } from '../../../entities/vehicle/Model'

export interface IGetVehicleModelsByBrandId {
  execute: (idBrand: number) => Promise<VehicleModel[]>
}
