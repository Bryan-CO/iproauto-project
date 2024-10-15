import { VehicleModel } from '../../../entities/vehicle/Model'

export interface IVehicleModelDatasource {
  getAllModels: () => Promise<VehicleModel[]>
  getModelsByBrandId: (idBrand: number) => Promise<VehicleModel[]>
  findByModel: (model: string) => Promise<VehicleModel>
  addModel: (vehicleModel: VehicleModel) => Promise<VehicleModel>
}
