export class VehicleModel {
  private readonly idModel: number | null
  private readonly idBrand: number | null
  private readonly name: string | null

  constructor (idModel: number | null, idBrand: number | null, name: string | null) {
    this.idModel = idModel
    this.name = name
    this.idBrand = idBrand
  }

  getIdModel (): number | null {
    return this.idModel
  }

  getName (): string | null {
    return this.name
  }

  getIdBrand (): number | null {
    return this.idBrand
  }
}
