import { FuelLevel } from '../../entities/receptions/Reception'

export interface IGetFuelLevels {
  execute: () => Promise<FuelLevel[]>
}
