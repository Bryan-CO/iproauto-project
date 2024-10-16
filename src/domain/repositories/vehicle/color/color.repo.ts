import { VehicleColor } from '../../../entities/vehicle/Color'

export interface IVehicleColorRepository {
  getAllColors: () => Promise<VehicleColor[]>
}
