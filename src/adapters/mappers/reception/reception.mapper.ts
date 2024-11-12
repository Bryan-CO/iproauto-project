import { Reception, ReceptionBuilder } from '../../../domain/entities/receptions/Reception'

export function DbToReceptions (dbReceptions: any[]): Reception[] {
  const receptions: Reception[] = dbReceptions.map((receptionDb: any) => {
    return new ReceptionBuilder()
      .withIdReception(receptionDb.id_reception)
      .withReceptionCode(receptionDb.reception_code)
      .withDate(receptionDb.date)
      .withKilometers(receptionDb.kilometers)
      .withVehicle({
        idVehicle: receptionDb.id_vehicle,
        licensePlate: receptionDb.license_plate,
        brandName: receptionDb.brand_name,
        modelName: receptionDb.model_name,
        engineCapacity: receptionDb.engine_capacity,
        chassisNumber: receptionDb.chassis_number
      })
      .withTowedIn(receptionDb.towed_in)
      .withFuelLevel({
        idFuelLevel: receptionDb.id_fuel_level,
        level: receptionDb.fuel_level
      })
      .withEmployee({
        idEmployee: receptionDb.id_employee,
        employee: receptionDb.employee,
        documentNumber: receptionDb.employee_document_number
      })
      .withPromisedDate(receptionDb.promised_date)
      .withNonOwnerPerson(receptionDb.non_owner_person)
      .withNonOwnerPhone(receptionDb.non_owner_phone)
      .withStateImageUrl(receptionDb.state_image_url)
      .withRepairNotes(receptionDb.repair_notes)
      .withClient({
        idPerson: receptionDb.id_person,
        documentTypeName: receptionDb.document_type_name,
        documentNumber: receptionDb.document_number,
        client: receptionDb.client,
        address: receptionDb.address,
        provinceName: receptionDb.province_name,
        districtName: receptionDb.district_name,
        selfPhone: receptionDb.self_phone
      })
      .withSoatExpirationDate(receptionDb.soat_expiration_date)
      .withNextServiceDate(receptionDb.next_service_date)
      .withInspectionExpirationDate(receptionDb.inspection_expiration_date)
      .build()
  })
  return receptions
}
