export class Fare {
  private readonly idFare: number
  private readonly name: string | null
  constructor (
    idFare: number,
    name: string | null
  ) {
    this.idFare = idFare
    this.name = name
  }

  getIdFare (): number {
    return this.idFare
  }

  getName (): string | null {
    return this.name
  }
}
