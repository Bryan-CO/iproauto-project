import { District } from '../localization/District'
import { Province } from '../localization/Province'
import { Fare } from './Fare'
import { NaturalPerson } from './NaturalPerson'
import { DocumentType } from './Person'

export class NaturalClient extends NaturalPerson {
  private readonly clientSince: Date | null
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
    fare: Fare | null,
    names: string | null,
    lastNames: string | null,
    // birthDate: Date | null,
    // gender: string | null,
    clientSince: Date | null
  ) {
    super(idPerson, documentType, documentNumber, province, district, address, selfPhone, referencePhone, email, observations, fare, names, lastNames /* birthDate gender */)
    this.clientSince = clientSince
  }

  getClientSince (): Date | null {
    return this.clientSince
  }
}

// export interface addClientDTO {
//   idDocumentType: number
//   documentNumber: string
//   idProvince: number
//   idDistrict: number
//   address: string
//   selfPhone: string
//   referencePhone: string | null
//   email: string | null
//   observations: string | null
//   idFare: number
// }
// export interface AddNaturalClientDTO extends addClientDTO {
//   names: string
//   lastNames: string
// }

// export interface EnterpriseClientDTO extends addClientDTO {
//   companyName: string
//   contactPerson: string
//   contactPhone: string
// }
