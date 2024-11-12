import { VehicleBrand } from './Brand'
import { VehicleColor } from './Color'
import { VehicleFuel } from './Fuel'
import { VehicleModel } from './Model'

export class Vehicle {
  private readonly idVehicle: number | null
  private readonly licensePlate: string | null
  private readonly brand: VehicleBrand | null
  private readonly model: VehicleModel | null
  private readonly color: VehicleColor | null
  private readonly year: number | null
  private readonly engineCapacity: number | null
  private readonly chassisNumber: string | null
  private readonly fuel: VehicleFuel | null
  private readonly observations: string | null
  private readonly urlImage: string | null
  private readonly idPerson: number | null

  constructor (
    builder: VehicleBuilder
  ) {
    this.idVehicle = builder.idVehicle
    this.licensePlate = builder.licensePlate
    this.brand = builder.brand
    this.model = builder.model
    this.color = builder.color
    this.year = builder.year
    this.engineCapacity = builder.engineCapacity
    this.chassisNumber = builder.chassisNumber
    this.fuel = builder.fuel
    this.observations = builder.observations
    this.urlImage = builder.urlImage
    this.idPerson = builder.idPerson
  }

  getIdVehicle (): number | null {
    return this.idVehicle
  }

  getLicensePlate (): string | null {
    return this.licensePlate
  }

  getBrand (): VehicleBrand | null {
    return this.brand
  }

  getModel (): VehicleModel | null {
    return this.model
  }

  getColor (): VehicleColor | null {
    return this.color
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

  getFuel (): VehicleFuel | null {
    return this.fuel
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
}

export class VehicleBuilder {
  idVehicle: number | null
  licensePlate: string | null
  brand: VehicleBrand | null
  model: VehicleModel | null
  color: VehicleColor | null
  year: number | null
  engineCapacity: number | null
  chassisNumber: string | null
  fuel: VehicleFuel | null
  observations: string | null
  urlImage: string | null
  idPerson: number | null

  constructor () {
    this.idVehicle = null
    this.licensePlate = null
    this.brand = null
    this.model = null
    this.color = null
    this.year = null
    this.engineCapacity = null
    this.chassisNumber = null
    this.fuel = null
    this.observations = null
    this.urlImage = null
    this.idPerson = null
  }

  withIdVehicle (idVehicle: number | null): VehicleBuilder {
    this.idVehicle = idVehicle
    return this
  }

  withLicensePlate (licensePlate: string | null): VehicleBuilder {
    this.licensePlate = licensePlate
    return this
  }

  withBrand (brand: VehicleBrand | null): VehicleBuilder {
    this.brand = brand
    return this
  }

  withModel (model: VehicleModel | null): VehicleBuilder {
    this.model = model
    return this
  }

  withColor (color: VehicleColor | null): VehicleBuilder {
    this.color = color
    return this
  }

  withYear (year: number | null): VehicleBuilder {
    this.year = year
    return this
  }

  withEngineCapacity (engineCapacity: number | null): VehicleBuilder {
    this.engineCapacity = engineCapacity
    return this
  }

  withChassisNumber (chassisNumber: string | null): VehicleBuilder {
    this.chassisNumber = chassisNumber
    return this
  }

  withFuel (fuel: VehicleFuel | null): VehicleBuilder {
    this.fuel = fuel
    return this
  }

  withObservations (observations: string | null): VehicleBuilder {
    this.observations = observations
    return this
  }

  withUrlImage (urlImage: string | null): VehicleBuilder {
    this.urlImage = urlImage
    return this
  }

  withIdPerson (idPerson: number | null): VehicleBuilder {
    this.idPerson = idPerson
    return this
  }

  build (): Vehicle {
    return new Vehicle(this)
  }
}
