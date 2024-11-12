import { GetClientDTO } from '../../../application/dtos/person/getClients'

export interface IGetClients {
  execute: () => Promise<GetClientDTO[]>
}
