import { NaturalClient } from '../../entities/persons/NaturalClient'

export interface INaturalClientRepository {
  addNaturalClient: (naturalClient: NaturalClient) => Promise<NaturalClient>
  getNaturalClientById: (idNaturalClient: number) => Promise<NaturalClient>
}
