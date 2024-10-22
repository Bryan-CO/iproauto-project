import { GetClientSummaryDTO } from '../../../application/dtos/vehicle/person/getClientSummary'
import { IClientDataSource } from '../../../domain/datasources/person/client.datasource'
import { DatabaseClient } from '../../db/databaseClient.impl'
import { DocumentType } from '../../../domain/entities/persons/Person'

export class ClientDataSource implements IClientDataSource {
  private readonly databaseClient: DatabaseClient
  constructor (databaseClient: DatabaseClient) {
    this.databaseClient = databaseClient
  }

  async getClientsSummary (): Promise<GetClientSummaryDTO[]> {
    const clientSummary = await this.databaseClient.executeProcedure<GetClientSummaryDTO[]>({
      nameProcedure: 'get_client_summary'
    })
    return clientSummary
  }

  async getDocumentTypes (): Promise<DocumentType[]> {
    const documentTypes = await this.databaseClient.executeProcedure<DocumentType[]>({
      nameProcedure: 'get_document_types'
    })
    return documentTypes
  }
}
