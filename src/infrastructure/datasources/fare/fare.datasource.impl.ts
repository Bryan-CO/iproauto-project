import { IDatabaseClient } from '../../../adapters/interfaces/databaseClient'
import { IFareDataSource } from '../../../domain/datasources/fare/fare.datasource'
import { Fare } from '../../../domain/entities/persons/Fare'

export class FareDataSource implements IFareDataSource {
  private readonly databaseClient: IDatabaseClient
  constructor (databaseClient: IDatabaseClient) {
    this.databaseClient = databaseClient
  }

  async getFares (): Promise<Fare[]> {
    const fares = await this.databaseClient.executeProcedure<Fare[]>({
      nameProcedure: 'get_fares'
    })
    return fares
  }
}
