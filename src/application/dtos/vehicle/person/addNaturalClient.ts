import { District } from '../../../../domain/entities/localization/District'
import { Province } from '../../../../domain/entities/localization/Province'
import { Fare } from '../../../../domain/entities/persons/Fare'
import { NaturalClient } from '../../../../domain/entities/persons/NaturalClient'
import { DocumentType } from '../../../../domain/entities/persons/Person'
import { AddClientDTO } from './addClient'

export class AddNaturalClientDTO extends AddClientDTO {
  private readonly names: string
  private readonly lastNames: string
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
    names: string,
    lastNames: string
  ) {
    super(idDocumentType, documentNumber, idProvince, idDistrict, address, selfPhone, referencePhone, email, observations, idFare)
    this.names = names
    this.lastNames = lastNames
  }

  getNames (): string {
    return this.names
  }

  getLastNames (): string {
    return this.lastNames
  }

  toNaturalClient (): NaturalClient {
    const naturalClient = new NaturalClient(
      null,
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
      this.getNames(),
      this.getLastNames(),
      new Date() // Fecha actual
    )
    return naturalClient
  }
}
