import { Brand } from '../entities/vehicle/Brand'

export interface IGetBrands {
  execute: () => Promise<Brand[]>
}
