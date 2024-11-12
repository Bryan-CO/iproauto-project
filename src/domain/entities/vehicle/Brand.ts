export class VehicleBrand {
  private readonly idBrand: number | null
  private readonly name: string | null

  constructor (idBrand: number | null, name: string | null) {
    this.idBrand = idBrand
    this.name = name
  }

  getIdBrand (): number | null {
    return this.idBrand
  }

  getName (): string | null {
    return this.name
  }
}
