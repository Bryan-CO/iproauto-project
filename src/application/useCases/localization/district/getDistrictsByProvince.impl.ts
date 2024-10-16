import { District } from '../../../../domain/entities/localization/District'
import { IGetDistrictsByProvince } from '../../../../domain/useCases/localization/district/getDistrictsByProvince'
import { IDistrictRepository } from '../../../../domain/repositories/localization/district/district.repo.impl'

export class GetDistrictsByProvince implements IGetDistrictsByProvince {
  constructor (private readonly districtRepository: IDistrictRepository) {
    this.districtRepository = districtRepository
  }

  async execute (idProvince: number): Promise<District[]> {
    return await this.districtRepository.getAllDistrictsByProvince(idProvince)
  }
}
