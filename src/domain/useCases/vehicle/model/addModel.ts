import { AddVehicleModelDto } from '../../../../application/dtos/vehicle/model/addVehicleModel'
import { VehicleModel } from '../../../entities/vehicle/Model'

export interface IAddVehicleModel {
  execute: (dto: AddVehicleModelDto) => Promise<VehicleModel>
}
