import { District } from '../../../domain/entities/localization/District'
import { Province } from '../../../domain/entities/localization/Province'
import { Fare } from '../../../domain/entities/persons/Fare'
import { NaturalClient } from '../../../domain/entities/persons/NaturalClient'
import { DocumentType } from '../../../domain/entities/persons/Person'

export function DbToNaturalClient (dbNaturalClient: any): NaturalClient {
  console.log(dbNaturalClient)
  return new NaturalClient(
    dbNaturalClient.id_client,
    dbNaturalClient.id_person,
    new DocumentType(dbNaturalClient.id_document_type, dbNaturalClient.document_type_name),
    dbNaturalClient.document_number,
    new Province(dbNaturalClient.id_province, dbNaturalClient.province_name),
    new District(dbNaturalClient.id_district, dbNaturalClient.id_province, dbNaturalClient.district_name),
    dbNaturalClient.address,
    dbNaturalClient.self_phone,
    dbNaturalClient.reference_phone,
    dbNaturalClient.email,
    dbNaturalClient.observations,
    new Fare(dbNaturalClient.id_fare, dbNaturalClient.fare_name),
    dbNaturalClient.names,
    dbNaturalClient.last_names,
    dbNaturalClient.client_since
  )
}
