import { Vehicle } from '../../entities/vehicle/Vehicle'

export interface IVehicleRepository {
  getVehicleByLicensePlate: (licensePlate: string) => Promise<Vehicle | null>
  addVehicle: (vehicle: Vehicle) => Promise<Vehicle>
  editVehicle: (vehicle: Vehicle) => Promise<Vehicle>
}
