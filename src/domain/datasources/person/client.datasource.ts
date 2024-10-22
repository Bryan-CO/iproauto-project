import { GetClientSummaryDTO } from '../../../application/dtos/vehicle/person/getClientSummary'
import { DocumentType } from '../../../domain/entities/persons/Person'

export interface IClientDataSource {
  getClientsSummary: () => Promise<GetClientSummaryDTO[]>
  getDocumentTypes: () => Promise<DocumentType[]>
}
