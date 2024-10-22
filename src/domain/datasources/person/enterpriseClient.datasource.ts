import { EnterpriseClient } from '../../entities/persons/EnterpriseClient'

export interface IEnterpriseClientDataSource {
  addEnterpriseClient: (enterpriseClient: EnterpriseClient) => Promise<EnterpriseClient>
}
