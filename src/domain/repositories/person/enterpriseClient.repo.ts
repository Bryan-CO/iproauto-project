import { EnterpriseClient } from '../../entities/persons/EnterpriseClient'

export interface IEnterpriseClientRepository {
  addEnterpriseClient: (enterpriseClient: EnterpriseClient) => Promise<EnterpriseClient>
}
