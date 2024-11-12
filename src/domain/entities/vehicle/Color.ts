export class VehicleColor {
  private readonly idColor: number | null
  private readonly name: string | null

  constructor (idColor: number | null, name: string | null) {
    this.idColor = idColor
    this.name = name
  }

  getIdColor (): number | null {
    return this.idColor
  }

  getName (): string | null {
    return this.name
  }
}
