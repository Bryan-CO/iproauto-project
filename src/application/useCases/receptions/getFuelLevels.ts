import { FuelLevel } from '../../../domain/entities/receptions/Reception'
import { IReceptionRepository } from '../../../domain/repositories/reception/reception.repo'
import { IGetFuelLevels } from '../../../domain/useCases/reception/getFuelLevels'

export class GetFuelLevels implements IGetFuelLevels {
  private readonly receptionRepository: IReceptionRepository

  constructor (receptionRepository: IReceptionRepository) {
    this.receptionRepository = receptionRepository
  }

  async execute (): Promise<FuelLevel[]> {
    return await this.receptionRepository.getFuelLevels()
  }
}
