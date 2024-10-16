import { VehicleFuel } from '../../../entities/vehicle/Fuel'

export interface IVehicleFuelRepository {
  getAllFuels: () => Promise<VehicleFuel[]>
}
