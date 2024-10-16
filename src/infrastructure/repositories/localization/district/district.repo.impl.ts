import { DbToDistricts } from '../../../../adapters/mappers/localization/district/district.mapper'
import { IDistrictDatasource } from '../../../../domain/datasources/localization/district/district.datasource.impl'
import { District } from '../../../../domain/entities/localization/District'
import { IDistrictRepository } from '../../../../domain/repositories/localization/district/district.repo.impl'

export class DistrictRepository implements IDistrictRepository {
  constructor (private readonly districtDatasource: IDistrictDatasource) {
    this.districtDatasource = districtDatasource
  }

  async getAllDistrictsByProvince (idProvince: number): Promise<District[]> {
    const districts = await this.districtDatasource.getAllDistrictsByProvince(idProvince)
    return DbToDistricts(districts)
  }
}
