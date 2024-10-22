import { NaturalClient } from '../../entities/persons/NaturalClient'

export interface INaturalClientDataSource {
  addNaturalClient: (naturalClient: NaturalClient) => Promise<NaturalClient>
}
