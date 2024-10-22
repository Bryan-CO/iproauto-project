import { DocumentType } from '../../entities/persons/Person'
export interface IGetDocumentTypes {
  execute: () => Promise<DocumentType[]>
}
