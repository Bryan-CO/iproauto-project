interface VehicleSummary {
  idVehicle?: number | null
  licensePlate?: string | null
  brandName?: string | null
  modelName?: string | null
  engineCapacity?: number | null
  chassisNumber?: string | null
}

interface ClientSummary {
  idPerson?: number | null
  documentTypeName?: string | null
  documentNumber?: string | null
  client?: string | null
  address?: string | null
  provinceName?: string | null
  districtName?: string | null
  selfPhone?: string | null
}

interface EmployeeSummary {
  idEmployee?: number | null
  employee?: string | null
  documentNumber?: string | null
}
export class Reception {
  private readonly idReception: number | null
  private receptionCode: string | null
  private readonly date: Date | null
  private readonly kilometers: number | null
  private readonly vehicle: VehicleSummary | null
  private readonly towedIn: boolean | null
  private readonly employee: EmployeeSummary | null
  private readonly promisedDate: Date | null
  private readonly nonOwnerPerson: string | null
  private readonly nonOwnerPhone: string | null
  private readonly stateImageUrl: string | null
  private readonly repairNotes: string | null
  private readonly client: ClientSummary | null
  private readonly soatExpirationDate: Date | null
  private readonly nextServiceDate: Date | null
  private readonly inspectionExpirationDate: Date | null

  constructor (receptionBuilder: ReceptionBuilder) {
    this.idReception = receptionBuilder.idReception
    this.receptionCode = receptionBuilder.receptionCode
    this.date = receptionBuilder.date
    this.kilometers = receptionBuilder.kilometers
    this.vehicle = receptionBuilder.vehicle
    this.towedIn = receptionBuilder.towedIn
    this.employee = receptionBuilder.employee
    this.promisedDate = receptionBuilder.promisedDate
    this.nonOwnerPerson = receptionBuilder.nonOwnerPerson
    this.nonOwnerPhone = receptionBuilder.nonOwnerPhone
    this.stateImageUrl = receptionBuilder.stateImageUrl
    this.repairNotes = receptionBuilder.repairNotes
    this.client = receptionBuilder.client
    this.soatExpirationDate = receptionBuilder.soatExpirationDate
    this.nextServiceDate = receptionBuilder.nextServiceDate
    this.inspectionExpirationDate = receptionBuilder.inspectionExpirationDate
  }

  getIdReception (): number | null {
    return this.idReception
  }

  getReceptionCode (): string | null {
    return this.receptionCode
  }

  getDate (): Date | null {
    return this.date
  }

  getKilometers (): number | null {
    return this.kilometers
  }

  getVehicle (): VehicleSummary | null {
    return this.vehicle
  }

  getTowedIn (): boolean | null {
    return this.towedIn
  }

  getEmployee (): EmployeeSummary | null {
    return this.employee
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

  getClient (): ClientSummary | null {
    return this.client
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

  generateReceptionCode (): void {
    const date = new Date()
    const code = `REC-${date.getFullYear()}${date.getMonth()}${date.getDate()}-${date.getHours()}${date.getMinutes()}${date.getSeconds()}`
    this.receptionCode = code
  }
}
export class ReceptionBuilder {
  idReception: number | null = null
  receptionCode: string | null = null
  date: Date | null = null
  kilometers: number | null = null
  vehicle: VehicleSummary | null = null
  towedIn: boolean | null = null
  employee: EmployeeSummary | null = null
  promisedDate: Date | null = null
  nonOwnerPerson: string | null = null
  nonOwnerPhone: string | null = null
  stateImageUrl: string | null = null
  repairNotes: string | null = null
  client: ClientSummary | null = null
  soatExpirationDate: Date | null = null
  nextServiceDate: Date | null = null
  inspectionExpirationDate: Date | null = null

  public withIdReception (id: number | null): ReceptionBuilder {
    this.idReception = id
    return this
  }

  public withReceptionCode (code: string | null): ReceptionBuilder {
    this.receptionCode = code
    return this
  }

  public withDate (date: Date | null): ReceptionBuilder {
    this.date = date
    return this
  }

  public withKilometers (kilometers: number | null): ReceptionBuilder {
    this.kilometers = kilometers
    return this
  }

  public withVehicle (vehicle: VehicleSummary | null): ReceptionBuilder {
    this.vehicle = vehicle
    return this
  }

  public withTowedIn (towedIn: boolean | null): ReceptionBuilder {
    this.towedIn = towedIn
    return this
  }

  public withEmployee (employee: EmployeeSummary | null): ReceptionBuilder {
    this.employee = employee
    return this
  }

  public withPromisedDate (date: Date | null): ReceptionBuilder {
    this.promisedDate = date
    return this
  }

  public withNonOwnerPerson (person: string | null): ReceptionBuilder {
    this.nonOwnerPerson = person
    return this
  }

  public withNonOwnerPhone (phone: string | null): ReceptionBuilder {
    this.nonOwnerPhone = phone
    return this
  }

  public withStateImageUrl (url: string | null): ReceptionBuilder {
    this.stateImageUrl = url
    return this
  }

  public withRepairNotes (notes: string | null): ReceptionBuilder {
    this.repairNotes = notes
    return this
  }

  public withClient (client: ClientSummary | null): ReceptionBuilder {
    this.client = client
    return this
  }

  public withSoatExpirationDate (date: Date | null): ReceptionBuilder {
    this.soatExpirationDate = date
    return this
  }

  public withNextServiceDate (date: Date | null): ReceptionBuilder {
    this.nextServiceDate = date
    return this
  }

  public withInspectionExpirationDate (date: Date | null): ReceptionBuilder {
    this.inspectionExpirationDate = date
    return this
  }

  public build (): Reception {
    return new Reception(this)
  }
}
