import { Reception } from '../../entities/receptions/Reception'

export interface IReceptionDataSource {
  getReceptions: () => Promise<any>
  addReception: (reception: Reception) => Promise<Reception>
  editReception: (reception: Reception) => Promise<Reception>
}
