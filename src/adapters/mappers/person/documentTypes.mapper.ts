import { DocumentType } from '../../../domain/entities/persons/Person'
export function DbToDocumentTypes (dbDocumentTypes: any[]): DocumentType[] {
  const documentTypes: DocumentType[] = dbDocumentTypes.map((documentType: any) => {
    return new DocumentType(documentType.id_document_type, documentType.name)
  })
  return documentTypes
}
