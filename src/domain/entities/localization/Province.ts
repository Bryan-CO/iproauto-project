export class Province {
  private readonly idProvince: number | null
  private readonly name: string | null

  constructor (idProvince: number | null, name: string | null) {
    this.idProvince = idProvince
    this.name = name
  }

  getIdProvince (): number | null {
    return this.idProvince
  }

  getName (): string | null {
    return this.name
  }
}
