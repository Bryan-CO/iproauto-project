export class VehicleFuel {
  private readonly idFuel: number | null
  private readonly name: string | null

  constructor (idFuel: number | null, name: string | null) {
    this.idFuel = idFuel
    this.name = name
  }

  getIdFuel (): number | null {
    return this.idFuel
  }

  getName (): string | null {
    return this.name
  }
}
