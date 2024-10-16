import { IDatabaseClient } from '../../../../adapters/interfaces/databaseClient'
import { IDistrictDatasource } from '../../../../domain/datasources/localization/district/district.datasource.impl'
import { District } from '../../../../domain/entities/localization/District'

export class DistrictDatasource implements IDistrictDatasource {
  private readonly dbClient: IDatabaseClient
  constructor (dbClient: IDatabaseClient) {
    this.dbClient = dbClient
  }

  async getAllDistrictsByProvince (idProvince: number): Promise<District[]> {
    const districts = await this.dbClient.executeProcedure<District[]>({
      nameProcedure: 'get_districts_by_province',
      parameters: [idProvince]
    })
    return districts
  }
}
