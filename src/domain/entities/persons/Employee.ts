import { NaturalPerson } from './NaturalPerson'
import { DocumentType } from './Person'
import { District } from '../localization/District'
import { Province } from '../localization/Province'

export class Employee extends NaturalPerson {
  private readonly employeeSince: Date | null
  constructor (
    idPerson: number,
    documentType: DocumentType | null,
    documentNumber: string | null,
    province: Province | null,
    district: District | null,
    address: string | null,
    selfPhone: string | null,
    referencePhone: string | null,
    email: string | null,
    observations: string | null,
    firstName: string | null,
    lastName: string | null,
    // birthDate: Date | null,
    // gender: string | null,
    employeeSince: Date | null
  ) {
    super(idPerson, documentType, documentNumber, province, district, address, selfPhone, referencePhone, email, observations, firstName, lastName /* birthDate, gender */)
    this.employeeSince = employeeSince
  }

  getEmployeeSince (): Date | null {
    return this.employeeSince
  }
}
