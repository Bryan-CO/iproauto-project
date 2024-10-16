import { VehicleColor } from "../../../entities/vehicle/Color";

export interface IVehicleColorDatasource {
  getAllColors: () => Promise<VehicleColor[]>
}