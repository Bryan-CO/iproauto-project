import { Reception } from '../../entities/receptions/Reception'

export interface IReceptionRepository {
  getReceptions: () => Promise<Reception[]>
  addReception: (reception: Reception) => Promise<Reception>
  editReception: (reception: Reception) => Promise<Reception>
}
