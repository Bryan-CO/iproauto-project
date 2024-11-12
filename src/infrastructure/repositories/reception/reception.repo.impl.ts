import { DbToReceptions } from '../../../adapters/mappers/reception/reception.mapper'
import { IReceptionDataSource } from '../../../domain/datasources/receptions/reception.datasource'
import { Reception } from '../../../domain/entities/receptions/Reception'
import { IReceptionRepository } from '../../../domain/repositories/reception/reception.repo'

export class ReceptionRepository implements IReceptionRepository {
  private readonly receptionDataSource: IReceptionDataSource

  constructor (receptionDataSource: IReceptionDataSource) {
    this.receptionDataSource = receptionDataSource
  }

  async getReceptions (): Promise<Reception[]> {
    const receptions = await this.receptionDataSource.getReceptions()
    return DbToReceptions(receptions)
  }

  async addReception (reception: Reception): Promise<Reception> {
    const addedReception = await this.receptionDataSource.addReception(reception)
    return DbToReceptions([addedReception])[0]
  }

  async editReception (reception: Reception): Promise<Reception> {
    const updatedReception = await this.receptionDataSource.editReception(reception)
    return DbToReceptions([updatedReception])[0]
  }
}
