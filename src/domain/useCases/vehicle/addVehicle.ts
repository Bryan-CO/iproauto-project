import { AddVehicleDto } from '../../../application/dtos/vehicle/addVehicleDto'
import { Vehicle } from '../../entities/vehicle/Vehicle'

export interface IAddVehicle {
  execute: (addVehicleDto: AddVehicleDto, extensionImage?: string) => Promise<Vehicle | undefined>
}
