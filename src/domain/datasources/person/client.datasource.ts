import { GetClientDTO } from '../../../application/dtos/person/getClients'
import { DocumentType } from '../../../domain/entities/persons/Person'

export interface IClientDataSource {
  getClients: () => Promise<GetClientDTO[]>
  getDocumentTypes: () => Promise<DocumentType[]>
}
