import { District } from '../localization/District'
import { Province } from '../localization/Province'
import { Fare } from './Fare'
import { DocumentType, Person } from './Person'

export class EnterpriseClient extends Person {
  private readonly companyName: string | null
  private readonly contactPerson: string | null
  private readonly contactPhone: string | null
  private readonly employeeSince: Date | null

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
    companyName: string | null,
    contactPerson: string | null,
    contactPhone: string | null,
    employeeSince: Date | null
  ) {
    super(idPerson, documentType, documentNumber, province, district, address, selfPhone, referencePhone, email, observations, fare)
    this.companyName = companyName
    this.contactPerson = contactPerson
    this.contactPhone = contactPhone
    this.employeeSince = employeeSince
  }

  getContactPerson (): string | null {
    return this.contactPerson
  }

  getContactPhone (): string | null {
    return this.contactPhone
  }

  getCompanyName (): string | null {
    return this.companyName
  }

  getEmployeeSince (): Date | null {
    return this.employeeSince
  }
}
