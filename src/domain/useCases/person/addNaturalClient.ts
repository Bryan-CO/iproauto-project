import { AddNaturalClientDTO } from '../../../application/dtos/vehicle/person/addNaturalClient'
import { NaturalClient } from '../../entities/persons/NaturalClient'

export interface IAddNaturalClient {
  execute: (addNaturalClientDTO: AddNaturalClientDTO) => Promise<NaturalClient>
}
