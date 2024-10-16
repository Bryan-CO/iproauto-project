export class VehicleFuel {
  private readonly idFuel: number | null
  private readonly name: string

  constructor (idFuel: number | null, name: string) {
    this.idFuel = idFuel
    this.name = name
  }

  getIdFuel (): number | null {
    return this.idFuel
  }

  getName (): string {
    return this.name
  }
}
