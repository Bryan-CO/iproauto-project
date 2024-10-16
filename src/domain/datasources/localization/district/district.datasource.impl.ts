import { District } from '../../../entities/localization/District'

export interface IDistrictDatasource {
  getAllDistrictsByProvince: (idProvince: number) => Promise<District[]>
}
