import { GetClientDTO } from '../../../application/dtos/person/getClients'
import { District } from '../../../domain/entities/localization/District'
import { Province } from '../../../domain/entities/localization/Province'
import { Fare } from '../../../domain/entities/persons/Fare'
import { DocumentType } from '../../../domain/entities/persons/Person'

export function DbToClientSummary (dbClientSummary: any[]): GetClientDTO[] {
  const clients: GetClientDTO[] = dbClientSummary.map((clientDb: any) => {
    return new GetClientDTO(
      clientDb.id_person,
      new DocumentType(clientDb.document_type_id, clientDb.document_type_name),
      clientDb.document_number,
      new Province(clientDb.id_province, clientDb.province_name),
      new District(clientDb.id_district, clientDb.id_province, clientDb.district_name),
      clientDb.address,
      clientDb.self_phone,
      clientDb.reference_phone,
      clientDb.email,
      clientDb.observations,
      new Fare(clientDb.id_fare, clientDb.fare_name),
      clientDb.names,
      clientDb.last_names,
      clientDb.companyName,
      clientDb.contact_person,
      clientDb.contact_phone
    )
  })
  return clients
}
