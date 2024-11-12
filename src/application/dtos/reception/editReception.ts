import { Reception, ReceptionBuilder } from '../../../domain/entities/receptions/Reception'

export class EditReceptionDtoBuilder {
  idReception: number | null = null
  date: Date | null = null
  idVehicle: number | null = null
  kilometers: number | null = null
  towedIn: boolean | null = null
  idEmployee: number | null = null
  promisedDate: Date | null = null
  nonOwnerPerson: string | null = null
  nonOwnerPhone: string | null = null
  stateImageUrl: string | null = null
  repairNotes: string | null = null
  soatExpirationDate: Date | null = null
  nextServiceDate: Date | null = null
  inspectionExpirationDate: Date | null = null
  image: Buffer | null = null

  public withIdReception (id: number | null): EditReceptionDtoBuilder {
    this.idReception = id
    return this
  }

  public withDate (date: Date | null): EditReceptionDtoBuilder {
    this.date = date
    return this
  }

  public withIdVehicle (id: number | null): EditReceptionDtoBuilder {
    this.idVehicle = id
    return this
  }

  public withKilometers (kilometers: number | null): EditReceptionDtoBuilder {
    this.kilometers = kilometers
    return this
  }

  public withTowedIn (towedIn: boolean | null): EditReceptionDtoBuilder {
    this.towedIn = towedIn
    return this
  }

  public withIdEmployee (id: number | null): EditReceptionDtoBuilder {
    this.idEmployee = id
    return this
  }

  public withPromisedDate (date: Date | null): EditReceptionDtoBuilder {
    this.promisedDate = date
    return this
  }

  public withNonOwnerPerson (person: string | null): EditReceptionDtoBuilder {
    this.nonOwnerPerson = person
    return this
  }

  public withNonOwnerPhone (phone: string | null): EditReceptionDtoBuilder {
    this.nonOwnerPhone = phone
    return this
  }

  public withStateImageUrl (url: string | null): EditReceptionDtoBuilder {
    this.stateImageUrl = url
    return this
  }

  public withRepairNotes (notes: string | null): EditReceptionDtoBuilder {
    this.repairNotes = notes
    return this
  }

  public withSoatExpirationDate (date: Date | null): EditReceptionDtoBuilder {
    this.soatExpirationDate = date
    return this
  }

  public withNextServiceDate (date: Date | null): EditReceptionDtoBuilder {
    this.nextServiceDate = date
    return this
  }

  public withInspectionExpirationDate (date: Date | null): EditReceptionDtoBuilder {
    this.inspectionExpirationDate = date
    return this
  }

  public withImage (image: Buffer | null): EditReceptionDtoBuilder {
    this.image = image
    return this
  }

  public build (): EditReceptionDto {
    return new EditReceptionDto(this)
  }
}
export class EditReceptionDto {
  private readonly idReception: number | null
  private readonly date: Date | null
  private readonly idVehicle: number | null
  private readonly kilometers: number | null
  private readonly towedIn: boolean | null
  private readonly idEmployee: number | null
  private readonly promisedDate: Date | null
  private readonly nonOwnerPerson: string | null
  private readonly nonOwnerPhone: string | null
  private readonly stateImageUrl: string | null
  private readonly repairNotes: string | null
  private readonly soatExpirationDate: Date | null
  private readonly nextServiceDate: Date | null
  private readonly inspectionExpirationDate: Date | null
  private readonly image: Buffer | null

  constructor (builder: EditReceptionDtoBuilder) {
    this.idReception = builder.idReception
    this.date = builder.date
    this.idVehicle = builder.idVehicle
    this.kilometers = builder.kilometers
    this.towedIn = builder.towedIn
    this.idEmployee = builder.idEmployee
    this.promisedDate = builder.promisedDate
    this.nonOwnerPerson = builder.nonOwnerPerson
    this.nonOwnerPhone = builder.nonOwnerPhone
    this.stateImageUrl = builder.stateImageUrl
    this.repairNotes = builder.repairNotes
    this.soatExpirationDate = builder.soatExpirationDate
    this.nextServiceDate = builder.nextServiceDate
    this.inspectionExpirationDate = builder.inspectionExpirationDate
    this.image = builder.image
  }

  getIdReception (): number | null {
    return this.idReception
  }

  getDate (): Date | null {
    return this.date
  }

  getIdVehicle (): number | null {
    return this.idVehicle
  }

  getKilometers (): number | null {
    return this.kilometers
  }

  getTowedIn (): boolean | null {
    return this.towedIn
  }

  getIdEmployee (): number | null {
    return this.idEmployee
  }

  getPromisedDate (): Date | null {
    return this.promisedDate
  }

  getNonOwnerPerson (): string | null {
    return this.nonOwnerPerson
  }

  getNonOwnerPhone (): string | null {
    return this.nonOwnerPhone
  }

  getStateImageUrl (): string | null {
    return this.stateImageUrl
  }

  getRepairNotes (): string | null {
    return this.repairNotes
  }

  getSoatExpirationDate (): Date | null {
    return this.soatExpirationDate
  }

  getNextServiceDate (): Date | null {
    return this.nextServiceDate
  }

  getInspectionExpirationDate (): Date | null {
    return this.inspectionExpirationDate
  }

  getImage (): Buffer | null {
    return this.image
  }

  toReception (): Reception {
    const reception = new ReceptionBuilder()
      .withIdReception(this.getIdReception())
      .withDate(this.getDate())
      .withKilometers(this.getKilometers())
      .withVehicle({
        idVehicle: this.getIdVehicle()
      })
      .withTowedIn(this.getTowedIn())
      .withEmployee({
        idEmployee: this.getIdEmployee()
      })
      .withPromisedDate(this.getPromisedDate())
      .withNonOwnerPerson(this.getNonOwnerPerson())
      .withNonOwnerPhone(this.getNonOwnerPhone())
      .withStateImageUrl(this.getStateImageUrl())
      .withRepairNotes(this.getRepairNotes())
      .withSoatExpirationDate(this.getSoatExpirationDate())
      .withNextServiceDate(this.getNextServiceDate())
      .withInspectionExpirationDate(this.getInspectionExpirationDate())
      .build()
    return reception
  }
}
