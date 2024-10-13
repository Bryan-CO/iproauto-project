import { VehicleModel } from '../../../entities/vehicle/Model'

export interface IGetVehicleModels {
  execute: () => Promise<VehicleModel[]>
}
