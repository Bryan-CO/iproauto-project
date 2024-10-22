import { GetClientSummaryDTO } from '../../../application/dtos/vehicle/person/getClientSummary'

export interface IClientDataSource {
  getClientsSummary: () => Promise<GetClientSummaryDTO[]>
}
