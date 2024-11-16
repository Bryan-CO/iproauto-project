import { NaturalClient } from '../../../domain/entities/persons/NaturalClient'
import { INaturalClientRepository } from '../../../domain/repositories/person/naturalClient.repo'
import { IAddNaturalClient } from '../../../domain/useCases/person/addNaturalClient'
import { AddNaturalClientDTO } from '../../dtos/person/addNaturalClient'

export class AddNaturalClient implements IAddNaturalClient {
  constructor (private readonly naturalClientRepository: INaturalClientRepository) {
    this.naturalClientRepository = naturalClientRepository
  }

  async execute (addNaturalClientDTO: AddNaturalClientDTO): Promise<NaturalClient> {
    const naturalClient = this.naturalClientRepository.addNaturalClient(addNaturalClientDTO.toNaturalClient())
    return await naturalClient
  }
}
