import { VehicleModel } from '../../../entities/vehicle/Model'

export interface IVehicleModelDatasource {
  getAllModels: () => Promise<VehicleModel[]>
  getModelsByBrandId: (idBrand: number) => Promise<VehicleModel[]>
}
