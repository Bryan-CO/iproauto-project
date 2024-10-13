import { AddVehicleBrandDto } from '../../../../application/dtos/vehicle/brand/addVehicleBrand'
import { VehicleBrand } from '../../../entities/vehicle/Brand'

export interface IAddVehicleBrand {
  execute: (dto: AddVehicleBrandDto) => Promise<VehicleBrand>
}
