import { VehicleFuel } from '../../../entities/vehicle/Fuel'

export interface IGetVehicleFuels {
  execute: () => Promise<VehicleFuel[]>
}
