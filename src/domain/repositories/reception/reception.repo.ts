import { FuelLevel, Reception } from '../../entities/receptions/Reception'

export interface IReceptionRepository {
  getReceptions: () => Promise<Reception[]>
  addReception: (reception: Reception) => Promise<Reception>
  editReception: (reception: Reception) => Promise<Reception>
  getFuelLevels: () => Promise<FuelLevel[]>
}
