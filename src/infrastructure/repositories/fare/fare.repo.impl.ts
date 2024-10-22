import { DbToFares } from '../../../adapters/mappers/fare/fare.mapper'
import { IFareDataSource } from '../../../domain/datasources/fare/fare.datasource'
import { Fare } from '../../../domain/entities/persons/Fare'
import { IFareRepository } from '../../../domain/repositories/fare/fare.repo'

export class FareRepository implements IFareRepository {
  private readonly fareDatasource: IFareDataSource

  constructor (fareDatasource: IFareDataSource) {
    this.fareDatasource = fareDatasource
  }

  async getFares (): Promise<Fare[]> {
    const fares = await this.fareDatasource.getFares()
    return DbToFares(fares)
  }
}
