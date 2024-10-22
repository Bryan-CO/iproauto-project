import { GetClientSummaryDTO } from '../../../application/dtos/vehicle/person/getClientSummary'

export interface IClientRepository {
  getClientsSummary: () => Promise<GetClientSummaryDTO[]>
}
