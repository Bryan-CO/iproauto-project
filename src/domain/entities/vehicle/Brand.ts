export class VehicleBrand {
  private readonly idBrand: number | null
  private readonly name: string

  constructor (idBrand: number | null, name: string) {
    this.idBrand = idBrand
    this.name = name
  }

  getIdBrand (): number | null {
    return this.idBrand
  }

  getName (): string {
    return this.name
  }
}
