import { FuelLevel } from '../../../domain/entities/receptions/Reception'

export function DbToFuelLevels (dbFuelLevels: any[]): FuelLevel[] {
  const fuelLevels: FuelLevel[] = dbFuelLevels.map((fuelLevelDb: any) => {
    return {
      idFuelLevel: fuelLevelDb.id_fuel_level,
      level: fuelLevelDb.level
    }
  })
  return fuelLevels
}
