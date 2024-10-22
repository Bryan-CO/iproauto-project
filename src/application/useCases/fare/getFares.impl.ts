import { Fare } from '../../../domain/entities/persons/Fare'
import { IFareRepository } from '../../../domain/repositories/fare/fare.repo'
import { IGetFares } from '../../../domain/useCases/fare/getFares'

export class GetFares implements IGetFares {
  private readonly fareRepository: IFareRepository

  constructor (fareRepository: IFareRepository) {
    this.fareRepository = fareRepository
  }

  async execute (): Promise<Fare[]> {
    const fares = await this.fareRepository.getFares()
    return fares
  }
}
