import { IClientRepository } from '../../../domain/repositories/person/client.repo'
import { IGetClients } from '../../../domain/useCases/person/getClients'
import { GetClientDTO } from '../../dtos/person/getClients'

export class GetClients implements IGetClients {
  private readonly clientRepository: IClientRepository

  constructor (clientRepository: IClientRepository) {
    this.clientRepository = clientRepository
  }

  async execute (): Promise<GetClientDTO[]> {
    const clientSummary = await this.clientRepository.getClients()
    return clientSummary
  }
}
