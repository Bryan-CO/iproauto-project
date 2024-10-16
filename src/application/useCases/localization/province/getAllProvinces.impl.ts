import { Province } from '../../../../domain/entities/localization/Province'
import { IProvinceRepository } from '../../../../domain/repositories/localization/province/province.repo'
import { IGetAllProvinces } from '../../../../domain/useCases/localization/province/getAllProvinces'

export class GetAllProvinces implements IGetAllProvinces {
  private readonly provinceRepository: IProvinceRepository
  constructor (provinceRepository: IProvinceRepository) {
    this.provinceRepository = provinceRepository
  }

  async execute (): Promise<Province[]> {
    return await this.provinceRepository.getAllProvinces()
  }
}
