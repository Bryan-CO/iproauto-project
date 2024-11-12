import { Vehicle } from '../../entities/vehicle/Vehicle'

export interface IVehicleDataSource {
  getVehicleByLicensePlate: (licensePlate: string) => Promise<Vehicle>
  addVehicle: (vehicle: Vehicle) => Promise<Vehicle>
  editVehicle: (vehicle: Vehicle) => Promise<Vehicle>
}
