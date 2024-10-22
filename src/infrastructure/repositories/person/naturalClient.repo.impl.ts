import { DbToNaturalClient } from '../../../adapters/mappers/person/naturalClient.mapper'
import { INaturalClientDataSource } from '../../../domain/datasources/person/naturalClient.datasource'
import { NaturalClient } from '../../../domain/entities/persons/NaturalClient'
import { INaturalClientRepository } from '../../../domain/repositories/person/naturalClient.repo'

export class NaturalClientRepository implements INaturalClientRepository {
  private readonly naturalClientDataSource: INaturalClientDataSource
  constructor (naturalClientDataSource: INaturalClientDataSource) {
    this.naturalClientDataSource = naturalClientDataSource
  }

  async addNaturalClient (naturalClient: NaturalClient): Promise<NaturalClient> {
    const naturalClientDB = await this.naturalClientDataSource.addNaturalClient(naturalClient)
    return DbToNaturalClient(naturalClientDB)
  }

  async getNaturalClientById (idNaturalClient: number): Promise<NaturalClient> {
    const naturalClientDB = await this.naturalClientDataSource.getNaturalClientById(idNaturalClient)
    return DbToNaturalClient(naturalClientDB)
  }
}
