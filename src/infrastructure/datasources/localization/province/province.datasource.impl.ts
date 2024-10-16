import { IDatabaseClient } from '../../../../adapters/interfaces/databaseClient'
import { IProvinceDatasource } from '../../../../domain/datasources/localization/province/province.datasource'
import { Province } from '../../../../domain/entities/localization/Province'

export class ProvinceDatasource implements IProvinceDatasource {
  private readonly dbClient: IDatabaseClient
  constructor (dbClient: IDatabaseClient) {
    this.dbClient = dbClient
  }

  async getAllProvinces (): Promise<Province[]> {
    const provinces = await this.dbClient.executeProcedure<Province[]>({
      nameProcedure: 'get_provinces'
    })
    return provinces
  }
}
