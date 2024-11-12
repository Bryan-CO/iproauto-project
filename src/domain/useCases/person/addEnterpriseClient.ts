import { AddEnterpriseClientDTO } from '../../../application/dtos/person/addEnterpriseClient'
import { EnterpriseClient } from '../../entities/persons/EnterpriseClient'

export interface IAddEnterpriseClient {
  execute: (addEnterpriseClientDTO: AddEnterpriseClientDTO) => Promise<EnterpriseClient>
}
