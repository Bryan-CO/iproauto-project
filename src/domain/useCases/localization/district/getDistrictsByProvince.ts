import { District } from '../../../entities/localization/District'

export interface IGetDistrictsByProvince {
  execute: (idProvince: number) => Promise<District[]>
}
