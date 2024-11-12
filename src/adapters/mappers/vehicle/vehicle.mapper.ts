import { VehicleBrand } from '../../../domain/entities/vehicle/Brand'
import { VehicleColor } from '../../../domain/entities/vehicle/Color'
import { VehicleFuel } from '../../../domain/entities/vehicle/Fuel'
import { VehicleModel } from '../../../domain/entities/vehicle/Model'
import { Vehicle, VehicleBuilder } from '../../../domain/entities/vehicle/Vehicle'

export function DbToVehicle (dbVehicle: any): Vehicle {
  return new VehicleBuilder()
    .withIdVehicle(dbVehicle.id_vehicle)
    .withLicensePlate(dbVehicle.license_plate)
    .withBrand(new VehicleBrand(dbVehicle.id_brand, dbVehicle.brand_name))
    .withModel(new VehicleModel(dbVehicle.id_model, dbVehicle.id_brand, dbVehicle.model_name))
    .withColor(new VehicleColor(dbVehicle.id_color, dbVehicle.color_name))
    .withYear(dbVehicle.year)
    .withEngineCapacity(Number(dbVehicle.engine_capacity))
    .withChassisNumber(dbVehicle.chassis_number)
    .withFuel(new VehicleFuel(dbVehicle.id_fuel, dbVehicle.fuel_name))
    .withObservations(dbVehicle.observations)
    .withUrlImage(dbVehicle.url_image)
    .withIdPerson(dbVehicle.id_person)
    .build()
}
