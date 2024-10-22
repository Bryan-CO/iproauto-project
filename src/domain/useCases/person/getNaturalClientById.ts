import { NaturalClient } from '../../entities/persons/NaturalClient'

export interface IGetNaturalClientById {
  execute: (idNaturalClient: number) => Promise<NaturalClient>
}
