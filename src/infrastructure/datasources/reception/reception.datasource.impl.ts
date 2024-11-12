import { IDatabaseClient } from '../../../adapters/interfaces/databaseClient'
import { IReceptionDataSource } from '../../../domain/datasources/receptions/reception.datasource'
import { Reception } from '../../../domain/entities/receptions/Reception'

export class ReceptionDataSource implements IReceptionDataSource {
  private readonly databaseClient: IDatabaseClient
  constructor (databaseClient: IDatabaseClient) {
    this.databaseClient = databaseClient
  }

  async getReceptions (): Promise<any> {
    const receptions = await this.databaseClient.executeProcedure<any>({
      nameProcedure: 'get_receptions'
    })
    return receptions
  }

  async addReception (reception: Reception): Promise<any> {
    const newReception = await this.databaseClient.executeProcedure<any>({
      nameProcedure: 'add_reception',
      parameters: [
        reception.getReceptionCode(),
        reception.getDate(),
        reception.getVehicle()?.idVehicle,
        reception.getKilometers(),
        reception.getTowedIn(),
        reception.getEmployee()?.idEmployee,
        reception.getPromisedDate(),
        reception.getNonOwnerPerson(),
        reception.getNonOwnerPhone(),
        reception.getStateImageUrl(),
        reception.getRepairNotes(),
        reception.getSoatExpirationDate(),
        reception.getNextServiceDate(),
        reception.getInspectionExpirationDate()
      ],
      onRow: true
    })
    return newReception
  }

  async editReception (reception: Reception): Promise<any> {
    const newReception = await this.databaseClient.executeProcedure<any>({
      nameProcedure: 'update_reception',
      parameters: [
        reception.getIdReception(),
        reception.getDate(),
        reception.getVehicle()?.idVehicle,
        reception.getKilometers(),
        reception.getTowedIn(),
        reception.getEmployee()?.idEmployee,
        reception.getPromisedDate(),
        reception.getNonOwnerPerson(),
        reception.getNonOwnerPhone(),
        reception.getStateImageUrl(),
        reception.getRepairNotes(),
        reception.getSoatExpirationDate(),
        reception.getNextServiceDate(),
        reception.getInspectionExpirationDate()
      ],
      onRow: true
    })
    return newReception
  }
}
