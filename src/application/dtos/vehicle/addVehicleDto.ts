import { VehicleBrand } from '../../../domain/entities/vehicle/Brand'
import { VehicleColor } from '../../../domain/entities/vehicle/Color'
import { VehicleFuel } from '../../../domain/entities/vehicle/Fuel'
import { VehicleModel } from '../../../domain/entities/vehicle/Model'
import { Vehicle, VehicleBuilder } from '../../../domain/entities/vehicle/Vehicle'

export class AddVehicleDto {
  private readonly licensePlate: string
  private readonly idBrand: number
  private readonly idModel: number
  private readonly idColor: number
  private readonly year: number
  private readonly engineCapacity: number
  private readonly chassisNumber: string
  private readonly idFuel: number
  private readonly observations: string
  private readonly urlImage: string
  private readonly idPerson: number
  private readonly image?: Buffer

  constructor (
    licensePlate: string,
    idBrand: number,
    idModel: number,
    idColor: number,
    year: number,
    engineCapacity: number,
    chassisNumber: string,
    idFuel: number,
    observations: string,
    urlImage: string,
    idPerson: number,
    image?: Buffer
  ) {
    this.licensePlate = licensePlate
    this.idBrand = idBrand
    this.idModel = idModel
    this.idColor = idColor
    this.year = year
    this.engineCapacity = engineCapacity
    this.chassisNumber = chassisNumber
    this.idFuel = idFuel
    this.observations = observations
    this.urlImage = urlImage
    this.idPerson = idPerson
    this.image = image
  }

  getLicensePlate (): string {
    return this.licensePlate
  }

  getIdBrand (): number {
    return this.idBrand
  }

  getIdModel (): number {
    return this.idModel
  }

  getIdColor (): number {
    return this.idColor
  }

  getYear (): number {
    return this.year
  }

  getEngineCapacity (): number {
    return this.engineCapacity
  }

  getChassisNumber (): string {
    return this.chassisNumber
  }

  getIdFuel (): number {
    return this.idFuel
  }

  getObservations (): string {
    return this.observations
  }

  getUrlImage (): string {
    return this.urlImage
  }

  getIdPerson (): number {
    return this.idPerson
  }

  getImage (): Buffer | undefined {
    return this.image
  }

  toVehicle (): Vehicle {
    return new VehicleBuilder()
      .withLicensePlate(this.licensePlate)
      .withBrand(new VehicleBrand(this.idBrand, null))
      .withModel(new VehicleModel(this.idModel, this.idBrand, null))
      .withColor(new VehicleColor(this.idColor, null))
      .withYear(this.year)
      .withEngineCapacity(this.engineCapacity)
      .withChassisNumber(this.chassisNumber)
      .withFuel(new VehicleFuel(this.idFuel, null))
      .withObservations(this.observations)
      .withUrlImage(this.urlImage)
      .withClient({
        idPerson: this.idPerson
      })
      .build()
  }
}
