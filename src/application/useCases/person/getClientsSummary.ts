import { IClientRepository } from '../../../domain/repositories/person/client.repo'
import { IGetClientSummary } from '../../../domain/useCases/person/getClientsSummary'
import { GetClientSummaryDTO } from '../../dtos/vehicle/person/getClientSummary'

export class GetClientsSummary implements IGetClientSummary {
  private readonly clientRepository: IClientRepository

  constructor (clientRepository: IClientRepository) {
    this.clientRepository = clientRepository
  }

  async execute (): Promise<GetClientSummaryDTO[]> {
    const clientSummary = await this.clientRepository.getClientsSummary()
    return clientSummary
  }
}
