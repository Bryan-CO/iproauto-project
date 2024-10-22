export class District {
  private readonly idDistrict: number | null
  private readonly idProvince: number | null
  private readonly name: string | null

  constructor (idDistrict: number | null, idProvince: number | null, name: string | null) {
    this.idDistrict = idDistrict
    this.idProvince = idProvince
    this.name = name
  }

  getIdDistrict (): number | null {
    return this.idDistrict
  }

  getIdProvince (): number | null {
    return this.idProvince
  }

  getName (): string | null {
    return this.name
  }
}
