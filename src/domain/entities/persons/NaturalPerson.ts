import { District } from '../localization/District'
import { Province } from '../localization/Province'
import { Fare } from './Fare'
import { Person, DocumentType } from './Person'

export class NaturalPerson extends Person {
  private readonly names: string | null
  private readonly lastName: string | null
  // private readonly birthDate: Date | null
  // private readonly gender: string | null
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
    lastNames: string | null
    // birthDate: Date | null
    // gender: string | null
  ) {
    super(idPerson, documentType, documentNumber, province, district, address, selfPhone, referencePhone, email, observations, fare)
    this.names = names
    this.lastName = lastNames
    // this.birthDate = birthDate
    // this.gender = gender
  }

  getNames (): string | null {
    return this.names
  }

  getLastNames (): string | null {
    return this.lastName
  }

  // getBirthDate (): Date | null {
  //   return this.birthDate
  // }

  // getGender (): string | null {
  //   return this.gender
  // }
}
