import { VehicleBrand } from '../../../../domain/entities/vehicle/Brand'

export function DbToVehicleBrands (dbVehicleBrand: any[]): VehicleBrand[] {
  const vehicleBrands: VehicleBrand[] = dbVehicleBrand.map((brand: any) => {
    return new VehicleBrand(brand.id_brand, brand.name)
  })
  return vehicleBrands
}
