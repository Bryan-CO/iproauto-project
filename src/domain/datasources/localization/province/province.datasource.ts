import { Province } from '../../../entities/localization/Province'

export interface IProvinceDatasource {
  getAllProvinces: () => Promise<Province[]>
}
