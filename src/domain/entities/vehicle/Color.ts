export class VehicleColor {
  private readonly idColor: number | null
  private readonly name: string

  constructor (idColor: number | null, name: string) {
    this.idColor = idColor
    this.name = name
  }

  getIdColor (): number | null {
    return this.idColor
  }

  getName (): string {
    return this.name
  }
}
