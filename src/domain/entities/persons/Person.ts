import { District } from '../localization/District'
import { Province } from '../localization/Province'
import { Fare } from './Fare'

export class DocumentType {
  private readonly idDocumentType: number
  private readonly name: string | null

  constructor (idDocumentType: number, name: string | null) {
    this.idDocumentType = idDocumentType
    this.name = name
  }

  getIdDocumentType (): number {
    return this.idDocumentType
  }

  getName (): string | null {
    return this.name
  }
}

export class Person {
  private readonly idPerson: number | null
  private readonly documentType: DocumentType | null
  private readonly documentNumber: string | null
  private readonly province: Province | null
  private readonly district: District | null
  private readonly address: string | null
  private readonly selfPhone: string | null
  private readonly referencePhone: string | null
  private readonly email: string | null
  private readonly observations: string | null
  private readonly fare: Fare | null
  constructor (
    idPerson: number | null,
    documentType: DocumentType | null,
    documentNumber: string | null,
    province: Province | null,
    district: District | null,
    address: string | null,
    selfPhone: string | null,
    referencePhone: string | null,
    email: string | null,
    observations: string | null,
    fare: Fare | null

  ) {
    this.idPerson = idPerson
    this.documentType = documentType
    this.documentNumber = documentNumber
    this.province = province
    this.district = district
    this.address = address
    this.selfPhone = selfPhone
    this.referencePhone = referencePhone
    this.email = email
    this.observations = observations
    this.fare = fare
  }

  getIdPerson (): number | null {
    return this.idPerson
  }

  getDocumentType (): DocumentType | null {
    return this.documentType
  }

  getDocumentNumber (): string | null {
    return this.documentNumber
  }

  getProvince (): Province | null {
    return this.province
  }

  getDistrict (): District | null {
    return this.district
  }

  getAddress (): string | null {
    return this.address
  }

  getSelfPhone (): string | null {
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

  getFare (): Fare | null {
    return this.fare
  }
}
