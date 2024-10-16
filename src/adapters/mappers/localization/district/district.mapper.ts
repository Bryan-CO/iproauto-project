import { District } from '../../../../domain/entities/localization/District'

export function DbToDistricts (dbDistricts: any[]): District[] {
  const districts: District[] = dbDistricts.map((district: any) => {
    return new District(district.id_district, district.id_province, district.name)
  })
  return districts
}
