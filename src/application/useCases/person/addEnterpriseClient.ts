import { EnterpriseClient } from '../../../domain/entities/persons/EnterpriseClient'
import { IEnterpriseClientRepository } from '../../../domain/repositories/person/enterpriseClient.repo'
import { AddEnterpriseClientDTO } from '../../dtos/person/addEnterpriseClient'

export class AddEnterpriseClient {
  private readonly enterpriseClientRepository: IEnterpriseClientRepository

  constructor (enterpriseClientRepository: IEnterpriseClientRepository) {
    this.enterpriseClientRepository = enterpriseClientRepository
  }

  async execute (addEnterpriseClientDTO: AddEnterpriseClientDTO): Promise<EnterpriseClient> {
    const enterpriseClient = await this.enterpriseClientRepository.addEnterpriseClient(addEnterpriseClientDTO.toEnterpriseClient())
    return enterpriseClient
  }
}
