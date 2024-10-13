import { VehicleModel } from '../../../entities/vehicle/Model'

export interface IVehicleModelRepository {
  getAllModels: () => Promise<VehicleModel[]>
  getModelsByBrandId: (idBrand: number) => Promise<VehicleModel[]>
}
