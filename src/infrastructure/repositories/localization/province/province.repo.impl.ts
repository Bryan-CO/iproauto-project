import { DbToProvinces } from '../../../../adapters/mappers/localization/province/province.mapper'
import { IProvinceDatasource } from '../../../../domain/datasources/localization/province/province.datasource'
import { Province } from '../../../../domain/entities/localization/Province'
import { IProvinceRepository } from '../../../../domain/repositories/localization/province/province.repo'

export class ProvinceRepository implements IProvinceRepository {
  constructor (private readonly provinceDatasource: IProvinceDatasource) {
    this.provinceDatasource = provinceDatasource
  }

  async getAllProvinces (): Promise<Province[]> {
    const provinces = await this.provinceDatasource.getAllProvinces()
    return DbToProvinces(provinces)
  }
}
