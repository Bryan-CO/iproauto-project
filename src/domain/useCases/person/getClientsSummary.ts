import { GetClientSummaryDTO } from '../../../application/dtos/vehicle/person/getClientSummary'

export interface IGetClientSummary {
  execute: () => Promise<GetClientSummaryDTO[]>
}
