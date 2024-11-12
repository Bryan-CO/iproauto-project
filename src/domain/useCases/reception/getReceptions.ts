import { Reception } from '../../entities/receptions/Reception'

export interface IGetReceptions {
  execute: () => Promise<Reception[]>
}
