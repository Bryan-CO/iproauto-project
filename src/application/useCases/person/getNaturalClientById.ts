import { NaturalClient } from '../../../domain/entities/persons/NaturalClient'
import { INaturalClientRepository } from '../../../domain/repositories/person/naturalClient.repo'
import { IGetNaturalClientById } from '../../../domain/useCases/person/getNaturalClientById'

export class GetNaturalClientById implements IGetNaturalClientById {
  private readonly naturalClientRepository: INaturalClientRepository

  constructor (naturalClientRepository: INaturalClientRepository) {
    this.naturalClientRepository = naturalClientRepository
  }

  async execute (idNaturalClient: number): Promise<NaturalClient> {
    const naturalClient = await this.naturalClientRepository.getNaturalClientById(idNaturalClient)
    return naturalClient
  }
}
