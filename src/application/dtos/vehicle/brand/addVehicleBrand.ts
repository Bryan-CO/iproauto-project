import { VehicleBrand } from '../../../../domain/entities/vehicle/Brand'

export class AddVehicleBrandDto {
  private readonly name: string

  constructor (name: string) {
    this.name = name
  }

  getName (): string {
    return this.name
  }

  toVehicleBrand (): VehicleBrand {
    return new VehicleBrand(null, this.name)
  }
}
