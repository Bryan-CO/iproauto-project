import { IClientDataSource } from '../../../domain/datasources/person/client.datasource'
import { DatabaseClient } from '../../db/databaseClient.impl'
import { DocumentType } from '../../../domain/entities/persons/Person'
import { GetClientDTO } from '../../../application/dtos/person/getClients'

export class ClientDataSource implements IClientDataSource {
  private readonly databaseClient: DatabaseClient
  constructor (databaseClient: DatabaseClient) {
    this.databaseClient = databaseClient
  }

  async getClients (): Promise<GetClientDTO[]> {
    const clients = await this.databaseClient.executeProcedure<GetClientDTO[]>({
      nameProcedure: 'get_clients'
    })
    return clients
  }

  async getDocumentTypes (): Promise<DocumentType[]> {
    const documentTypes = await this.databaseClient.executeProcedure<DocumentType[]>({
      nameProcedure: 'get_document_types'
    })
    return documentTypes
  }
}
