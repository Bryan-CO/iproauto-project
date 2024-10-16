import { Province } from '../../../entities/localization/Province'

export interface IProvinceRepository {
  getAllProvinces: () => Promise<Province[]>
}
