import { IDatabaseClient } from '../../../adapters/interfaces/databaseClient'
import { INaturalClientDataSource } from '../../../domain/datasources/person/naturalClient.datasource'
import { NaturalClient } from '../../../domain/entities/persons/NaturalClient'

export class NaturalClientDataSource implements INaturalClientDataSource {
  private readonly databaseClient: IDatabaseClient
  constructor (databaseClient: IDatabaseClient) {
    this.databaseClient = databaseClient
  }

  async addNaturalClient (naturalClient: NaturalClient): Promise<NaturalClient> {
    const naturalClientDB = await this.databaseClient.executeProcedure<NaturalClient>({
      nameProcedure: 'add_natural_client',
      parameters: [
        naturalClient.getDocumentType()?.getIdDocumentType(),
        naturalClient.getDocumentNumber(),
        naturalClient.getProvince()?.getIdProvince(),
        naturalClient.getDistrict()?.getIdDistrict(),
        naturalClient.getAddress(),
        naturalClient.getSelfPhone(),
        naturalClient.getReferencePhone(),
        naturalClient.getEmail(),
        naturalClient.getObservations(),
        naturalClient.getFare()?.getIdFare(),
        naturalClient.getNames(),
        naturalClient.getLastNames(),
        naturalClient.getClientSince()
      ],
      onRow: true
    })
    return naturalClientDB
  }

  async getNaturalClientById (idNaturalClient: number): Promise<NaturalClient> {
    const naturalClientDB = await this.databaseClient.executeProcedure<NaturalClient>({
      nameProcedure: 'get_natural_client_by_id',
      parameters: [idNaturalClient],
      onRow: true
    })
    return naturalClientDB
  }
}
