import { VehicleModel } from '../../../../domain/entities/vehicle/Model'

export function DbToVehicleModels (dbVehicleModel: any[]): VehicleModel[] {
  const vehicleModels: VehicleModel[] = dbVehicleModel.map((model: any) => {
    return new VehicleModel(model.id_model, model.id_brand, model.name)
  })
  return vehicleModels
}
