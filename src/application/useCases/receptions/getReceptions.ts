import { Reception } from '../../../domain/entities/receptions/Reception'
import { IReceptionRepository } from '../../../domain/repositories/reception/reception.repo'
import { IGetReceptions } from '../../../domain/useCases/reception/getReceptions'

export class GetReceptions implements IGetReceptions {
  private readonly receptionRepository: IReceptionRepository

  constructor (receptionRepository: IReceptionRepository) {
    this.receptionRepository = receptionRepository
  }

  async execute (): Promise<Reception[]> {
    const receptions = await this.receptionRepository.getReceptions()
    return receptions
  }
}
