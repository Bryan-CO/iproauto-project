import { Province } from '../../../entities/localization/Province'

export interface IGetAllProvinces {
  execute: () => Promise<Province[]>
}
