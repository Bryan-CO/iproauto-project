export class AddClientDTO {
  private readonly idDocumentType: number
  private readonly documentNumber: string
  private readonly idProvince: number
  private readonly idDistrict: number
  private readonly address: string
  private readonly selfPhone: string
  private readonly referencePhone: string | null
  private readonly email: string | null
  private readonly observations: string | null
  private readonly idFare: number

  constructor (
    idDocumentType: number,
    documentNumber: string,
    idProvince: number,
    idDistrict: number,
    address: string,
    selfPhone: string,
    referencePhone: string | null,
    email: string | null,
    observations: string | null,
    idFare: number
  ) {
    this.idDocumentType = idDocumentType
    this.documentNumber = documentNumber
    this.idProvince = idProvince
    this.idDistrict = idDistrict
    this.address = address
    this.selfPhone = selfPhone
    this.referencePhone = referencePhone
    this.email = email
    this.observations = observations
    this.idFare = idFare
  }

  getIdDocumentType (): number {
    return this.idDocumentType
  }

  getDocumentNumber (): string {
    return this.documentNumber
  }

  getIdProvince (): number {
    return this.idProvince
  }

  getIdDistrict (): number {
    return this.idDistrict
  }

  getAddress (): string {
    return this.address
  }

  getSelfPhone (): string {
    return this.selfPhone
  }

  getReferencePhone (): string | null {
    return this.referencePhone
  }

  getEmail (): string | null {
    return this.email
  }

  getObservations (): string | null {
    return this.observations
  }

  getIdFare (): number {
    return this.idFare
  }
}
