export class Province {
  private readonly idProvince: number | null
  private readonly name: string

  constructor (idProvince: number | null, name: string) {
    this.idProvince = idProvince
    this.name = name
  }

  getIdProvince (): number | null {
    return this.idProvince
  }

  getName (): string {
    return this.name
  }
}
