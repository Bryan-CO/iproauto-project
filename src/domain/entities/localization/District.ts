export class District {
  private readonly idDistrict: number | null
  private readonly idProvince: number | null
  private readonly name: string

  constructor (idDistrict: number | null, idProvince: number | null, name: string) {
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

  getName (): string {
    return this.name
  }
}
