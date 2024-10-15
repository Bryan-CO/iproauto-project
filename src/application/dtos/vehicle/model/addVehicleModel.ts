import { VehicleModel } from '../../../../domain/entities/vehicle/Model'

export class AddVehicleModelDto {
  constructor (private readonly idBrand: number, private readonly name: string) {
    this.name = name
    this.idBrand = idBrand
  }

  getName (): string {
    return this.name
  }

  getIdBrand (): number {
    return this.idBrand
  }

  toVehicleModel (): VehicleModel {
    return new VehicleModel(null, this.idBrand, this.name)
  }
}
