import { IEnterpriseClientDataSource } from '../../../domain/datasources/person/enterpriseClient.datasource'
import { EnterpriseClient } from '../../../domain/entities/persons/EnterpriseClient'
import { DatabaseClient } from '../../db/databaseClient.impl'

export class EnterpriseClientDataSource implements IEnterpriseClientDataSource {
  private readonly databaseClient: DatabaseClient
  constructor (databaseClient: DatabaseClient) {
    this.databaseClient = databaseClient
  }

  async addEnterpriseClient (enterpriseClient: EnterpriseClient): Promise<EnterpriseClient> {
    const enterpriseClientId = await this.databaseClient.executeProcedure<EnterpriseClient>({
      nameProcedure: 'add_enterprise_client',
      parameters: [
        enterpriseClient.getDocumentType()?.getIdDocumentType(),
        enterpriseClient.getDocumentNumber(),
        enterpriseClient.getProvince()?.getIdProvince(),
        enterpriseClient.getDistrict()?.getIdDistrict(),
        enterpriseClient.getAddress(),
        enterpriseClient.getSelfPhone(),
        enterpriseClient.getReferencePhone(),
        enterpriseClient.getEmail(),
        enterpriseClient.getObservations(),
        enterpriseClient.getFare()?.getIdFare(),
        enterpriseClient.getCompanyName(),
        enterpriseClient.getContactPerson(),
        enterpriseClient.getContactPhone()
      ],
      onRow: true
    })
    return enterpriseClientId
  }

  async getEnterpriseClientById (idEnterpriseClient: number): Promise<EnterpriseClient> {
    const enterpriseClientDB = await this.databaseClient.executeProcedure<EnterpriseClient>({
      nameProcedure: 'get_enterprise_client_by_id',
      parameters: [idEnterpriseClient],
      onRow: true
    })
    return enterpriseClientDB
  }
}
