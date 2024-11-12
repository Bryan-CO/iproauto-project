import { GetClientDTO } from '../../../application/dtos/person/getClients'
import { DocumentType } from '../../entities/persons/Person'

export interface IClientRepository {
  getClients: () => Promise<GetClientDTO[]>
  getDocumentTypes: () => Promise<DocumentType[]>
}
