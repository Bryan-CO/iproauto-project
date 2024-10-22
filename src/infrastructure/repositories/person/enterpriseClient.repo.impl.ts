import { DbToEnterpriseClient } from '../../../adapters/mappers/person/enterpriseClient.mapper'
import { IEnterpriseClientDataSource } from '../../../domain/datasources/person/enterpriseClient.datasource'
import { EnterpriseClient } from '../../../domain/entities/persons/EnterpriseClient'
import { IEnterpriseClientRepository } from '../../../domain/repositories/person/enterpriseClient.repo'

export class EnterpriseClientRepository implements IEnterpriseClientRepository {
  private readonly enterpriseClientDatasource: IEnterpriseClientDataSource

  constructor (enterpriseClientDatasource: IEnterpriseClientDataSource) {
    this.enterpriseClientDatasource = enterpriseClientDatasource
  }

  async addEnterpriseClient (enterpriseClient: EnterpriseClient): Promise<EnterpriseClient> {
    const enterpriseClientId = await this.enterpriseClientDatasource.addEnterpriseClient(enterpriseClient)
    return DbToEnterpriseClient(enterpriseClientId)
  }

  async getEnterpriseClientById (idEnterpriseClient: number): Promise<EnterpriseClient> {
    const enterpriseClientDB = await this.enterpriseClientDatasource.getEnterpriseClientById(idEnterpriseClient)
    return DbToEnterpriseClient(enterpriseClientDB)
  }
}
