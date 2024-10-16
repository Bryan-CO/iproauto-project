import { VehicleFuel } from '../../../../domain/entities/vehicle/Fuel'

export function DbToVehicleFuels (dbVehicleFuel: any[]): VehicleFuel[] {
  const vehicleFuels: VehicleFuel[] = dbVehicleFuel.map((fuel: any) => {
    return new VehicleFuel(fuel.id_fuel, fuel.name)
  })
  return vehicleFuels
}
