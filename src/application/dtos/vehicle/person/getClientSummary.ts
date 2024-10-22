export class GetClientSummaryDTO {
  private readonly idPerson: number
  private readonly client: string
  private readonly documentNumber: string

  constructor (idPerson: number, client: string, documentNumber: string) {
    this.idPerson = idPerson
    this.client = client
    this.documentNumber = documentNumber
  }

  getIdPerson (): number {
    return this.idPerson
  }

  getClient (): string {
    return this.client
  }

  getDocumentNumber (): string {
    return this.documentNumber
  }
}
