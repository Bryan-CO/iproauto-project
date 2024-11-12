import { Vehicle } from '../../entities/vehicle/Vehicle'

export interface IGetVehicleByLicensePlate {
  execute: (licensePlate: string) => Promise<Vehicle>
}
