import { EnterpriseClient } from '../../../domain/entities/persons/EnterpriseClient'
import { IEnterpriseClientRepository } from '../../../domain/repositories/person/enterpriseClient.repo'

export class GetEnterpriseClientById {
  private readonly enterpriseClientRepository: IEnterpriseClientRepository

  constructor (enterpriseClientRepository: IEnterpriseClientRepository) {
    this.enterpriseClientRepository = enterpriseClientRepository
  }

  async execute (idEnterpriseClient: number): Promise<EnterpriseClient> {
    const enterpriseClient = await this.enterpriseClientRepository.getEnterpriseClientById(idEnterpriseClient)
    return enterpriseClient
  }
}
