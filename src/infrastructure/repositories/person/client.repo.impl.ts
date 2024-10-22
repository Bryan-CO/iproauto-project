import { DbToClientSummary } from '../../../adapters/mappers/person/clientSummary.mapper'
import { GetClientSummaryDTO } from '../../../application/dtos/vehicle/person/getClientSummary'
import { IClientDataSource } from '../../../domain/datasources/person/client.datasource'
import { IClientRepository } from '../../../domain/repositories/person/client.repo'
import { DocumentType } from '../../../domain/entities/persons/Person'
import { DbToDocumentTypes } from '../../../adapters/mappers/person/documentTypes.mapper'

export class ClientRepository implements IClientRepository {
  private readonly clientDataSource: IClientDataSource

  constructor (clientDataSource: IClientDataSource) {
    this.clientDataSource = clientDataSource
  }

  async getClientsSummary (): Promise<GetClientSummaryDTO[]> {
    const clientSummary = await this.clientDataSource.getClientsSummary()
    return DbToClientSummary(clientSummary)
  }

  async getDocumentTypes (): Promise<DocumentType[]> {
    const documentTypes = await this.clientDataSource.getDocumentTypes()
    return DbToDocumentTypes(documentTypes)
  }
}
