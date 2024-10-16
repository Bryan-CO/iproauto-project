import { VehicleColor } from '../../../../domain/entities/vehicle/Color'

export function DbToVehicleColors (dbVehicleColor: any[]): VehicleColor[] {
  const vehicleColors: VehicleColor[] = dbVehicleColor.map((color: any) => {
    return new VehicleColor(color.id_color, color.name)
  })
  return vehicleColors
}
