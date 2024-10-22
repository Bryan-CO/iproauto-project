import { EnterpriseClient } from '../../../../domain/entities/persons/EnterpriseClient'
import { AddClientDTO } from './addClient'
import { DocumentType } from '../../../../domain/entities/persons/Person'
import { Province } from '../../../../domain/entities/localization/Province'
import { District } from '../../../../domain/entities/localization/District'
import { Fare } from '../../../../domain/entities/persons/Fare'
export class AddEnterpriseClientDTO extends AddClientDTO {
  private readonly companyName: string
  private readonly contactPerson: string
  private readonly contactPhone: string
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
    idFare: number,
    companyName: string,
    contactPerson: string,
    contactPhone: string
  ) {
    super(idDocumentType, documentNumber, idProvince, idDistrict, address, selfPhone, referencePhone, email, observations, idFare)
    this.companyName = companyName
    this.contactPerson = contactPerson
    this.contactPhone = contactPhone
  }

  getCompanyName (): string {
    return this.companyName
  }

  getContactPerson (): string {
    return this.contactPerson
  }

  getContactPhone (): string {
    return this.contactPhone
  }

  toEnterpriseClient (): EnterpriseClient {
    const naturalClient = new EnterpriseClient(
      null,
      new DocumentType(this.getIdDocumentType(), null),
      this.getDocumentNumber(),
      new Province(this.getIdProvince(), null),
      new District(this.getIdDistrict(), this.getIdProvince(), null),
      this.getAddress(),
      this.getSelfPhone(),
      this.getReferencePhone(),
      this.getEmail(),
      this.getObservations(),
      new Fare(this.getIdFare(), null),
      this.getCompanyName(),
      this.getContactPerson(),
      this.getContactPhone(),
      new Date() // Fecha actual
    )
    return naturalClient
  }
}
