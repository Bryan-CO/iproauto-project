import { VehicleBrand } from '../../../domain/entities/vehicle/Brand'
import { VehicleColor } from '../../../domain/entities/vehicle/Color'
import { VehicleFuel } from '../../../domain/entities/vehicle/Fuel'
import { VehicleModel } from '../../../domain/entities/vehicle/Model'
import { Vehicle, VehicleBuilder } from '../../../domain/entities/vehicle/Vehicle'

export class EditVehicleDto {
  private readonly idVehicle: number
  private readonly licensePlate: string | null
  private readonly idBrand: number | null
  private readonly idModel: number | null
  private readonly idColor: number | null
  private readonly year: number | null
  private readonly engineCapacity: number | null
  private readonly chassisNumber: string | null
  private readonly idFuel: number | null
  private readonly observations: string | null
  private readonly urlImage: string | null
  private readonly idPerson: number | null
  private readonly image?: Buffer

  constructor (
    idVehicle: number,
    licensePlate: string | null,
    idBrand: number | null,
    idModel: number | null,
    idColor: number | null,
    year: number | null,
    engineCapacity: number | null,
    chassisNumber: string | null,
    idFuel: number | null,
    observations: string | null,
    urlImage: string | null,
    idPerson: number | null,
    image?: Buffer
  ) {
    this.idVehicle = idVehicle
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

  getIdVehicle (): number {
    return this.idVehicle
  }

  getLicensePlate (): string | null {
    return this.licensePlate
  }

  getIdBrand (): number | null {
    return this.idBrand
  }

  getIdModel (): number | null {
    return this.idModel
  }

  getIdColor (): number | null {
    return this.idColor
  }

  getYear (): number | null {
    return this.year
  }

  getEngineCapacity (): number | null {
    return this.engineCapacity
  }

  getChassisNumber (): string | null {
    return this.chassisNumber
  }

  getIdFuel (): number | null {
    return this.idFuel
  }

  getObservations (): string | null {
    return this.observations
  }

  getUrlImage (): string | null {
    return this.urlImage
  }

  getIdPerson (): number | null {
    return this.idPerson
  }

  getImage (): Buffer | undefined {
    return this.image
  }

  toVehicle (): Vehicle {
    return new VehicleBuilder()
      .withIdVehicle(this.idVehicle)
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
