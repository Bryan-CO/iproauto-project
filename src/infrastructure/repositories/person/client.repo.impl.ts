import { DbToClientSummary } from '../../../adapters/mappers/person/client.mapper'
import { IClientDataSource } from '../../../domain/datasources/person/client.datasource'
import { IClientRepository } from '../../../domain/repositories/person/client.repo'
import { DocumentType } from '../../../domain/entities/persons/Person'
import { DbToDocumentTypes } from '../../../adapters/mappers/person/documentTypes.mapper'
import { GetClientDTO } from '../../../application/dtos/person/getClients'

export class ClientRepository implements IClientRepository {
  private readonly clientDataSource: IClientDataSource

  constructor (clientDataSource: IClientDataSource) {
    this.clientDataSource = clientDataSource
  }

  async getClients (): Promise<GetClientDTO[]> {
    const clients = await this.clientDataSource.getClients()
    return DbToClientSummary(clients)
  }

  async getDocumentTypes (): Promise<DocumentType[]> {
    const documentTypes = await this.clientDataSource.getDocumentTypes()
    return DbToDocumentTypes(documentTypes)
  }
}
