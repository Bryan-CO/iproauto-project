import { District } from '../../../domain/entities/localization/District'
import { Province } from '../../../domain/entities/localization/Province'
import { EnterpriseClient } from '../../../domain/entities/persons/EnterpriseClient'
import { Fare } from '../../../domain/entities/persons/Fare'
import { DocumentType } from '../../../domain/entities/persons/Person'

export function DbToEnterpriseClient (dbEnterpriseClient: any): EnterpriseClient {
  return new EnterpriseClient(
    dbEnterpriseClient.id_enterprise,
    dbEnterpriseClient.id_person,
    new DocumentType(dbEnterpriseClient.id_document_type, dbEnterpriseClient.document_type_name),
    dbEnterpriseClient.document_number,
    new Province(dbEnterpriseClient.id_province, dbEnterpriseClient.province_name),
    new District(dbEnterpriseClient.id_district, dbEnterpriseClient.id_province, dbEnterpriseClient.district_name),
    dbEnterpriseClient.address,
    dbEnterpriseClient.self_phone,
    dbEnterpriseClient.reference_phone,
    dbEnterpriseClient.email,
    dbEnterpriseClient.observations,
    new Fare(dbEnterpriseClient.id_fare, dbEnterpriseClient.fare_name),
    dbEnterpriseClient.company_name,
    dbEnterpriseClient.contact_person,
    dbEnterpriseClient.contact_phone
  )
}
