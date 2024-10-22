import { IClientRepository } from '../../../domain/repositories/person/client.repo'
import { IGetDocumentTypes } from '../../../domain/useCases/person/getDocumentTypes'
import { DocumentType } from '../../../domain/entities/persons/Person'

export class GetDocumentTypes implements IGetDocumentTypes {
  private readonly clientRepository: IClientRepository

  constructor (clientRepository: IClientRepository) {
    this.clientRepository = clientRepository
  }

  async execute (): Promise<DocumentType[]> {
    const documentTypes = await this.clientRepository.getDocumentTypes()
    return documentTypes
  }
}
