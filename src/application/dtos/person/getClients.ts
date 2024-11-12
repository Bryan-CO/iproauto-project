import { District } from '../../../domain/entities/localization/District'
import { Province } from '../../../domain/entities/localization/Province'
import { Fare } from '../../../domain/entities/persons/Fare'
import { Person, DocumentType } from '../../../domain/entities/persons/Person'

export class GetClientDTO extends Person {
  private readonly names: string | null
  private readonly lastNames: string | null
  private readonly companyName: string | null
  private readonly contactPerson: string | null
  private readonly contactPhone: string | null
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
    companyName: string | null,
    contactPerson: string | null,
    contactPhone: string | null
  ) {
    super(idPerson, documentType, documentNumber, province, district, address, selfPhone, referencePhone, email, observations, fare)
    this.names = names
    this.lastNames = lastNames
    this.companyName = companyName
    this.contactPerson = contactPerson
    this.contactPhone = contactPhone
  }

  getNames (): string | null {
    return this.names
  }

  getLastNames (): string | null {
    return this.lastNames
  }

  getCompanyName (): string | null {
    return this.companyName
  }

  getContactPerson (): string | null {
    return this.contactPerson
  }

  getContactPhone (): string | null {
    return this.contactPhone
  }
}
