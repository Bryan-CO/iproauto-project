import { GetClientSummaryDTO } from '../../../application/dtos/vehicle/person/getClientSummary'
import { DocumentType } from '../../entities/persons/Person'

export interface IClientRepository {
  getClientsSummary: () => Promise<GetClientSummaryDTO[]>
  getDocumentTypes: () => Promise<DocumentType[]>
}
