import { EnterpriseClient } from '../../entities/persons/EnterpriseClient'

export interface IGetEnterpriseClientById {
  execute: (idEnterpriseClient: number) => Promise<EnterpriseClient>
}
