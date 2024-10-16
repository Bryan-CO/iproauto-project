import { Province } from '../../../../domain/entities/localization/Province'

export function DbToProvinces (dbProvinces: any[]): Province[] {
  const provinces: Province[] = dbProvinces.map((province: any) => {
    return new Province(province.id_province, province.name)
  })
  return provinces
}
