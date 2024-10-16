import { VehicleFuel } from '../../../entities/vehicle/Fuel'

export interface IVehicleFuelDatasource {
  getAllFuels: () => Promise<VehicleFuel[]>
}
