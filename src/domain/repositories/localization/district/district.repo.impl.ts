import { District } from '../../../entities/localization/District'

export interface IDistrictRepository {
  getAllDistrictsByProvince: (idProvince: number) => Promise<District[]>
}
