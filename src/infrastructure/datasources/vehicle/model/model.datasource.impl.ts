import { IDatabaseClient } from '../../../../adapters/interfaces/databaseClient'
import { IVehicleModelDatasource } from '../../../../domain/datasources/vehicle/model/model.datasource'
import { VehicleModel } from '../../../../domain/entities/vehicle/Model'

export class VehicleModelDatasource implements IVehicleModelDatasource {
  constructor (private readonly dbClient: IDatabaseClient) {
    this.dbClient = dbClient
  }

  async getAllModels (): Promise<VehicleModel[]> {
    return await this.dbClient.executeProcedure<VehicleModel[]>({
      nameProcedure: 'get_vehicle_models'
    })
  }

  async getModelsByBrandId (idBrand: number): Promise<VehicleModel[]> {
    return await this.dbClient.executeProcedure<VehicleModel[]>({
      nameProcedure: 'get_vehicle_models',
      parameters: [idBrand]
    })
  }

  async findByModel (model: string): Promise<VehicleModel> {
    return await this.dbClient.executeProcedure<VehicleModel>({
      nameProcedure: 'find_vehicle_model',
      parameters: [model],
      onRow: true
    })
  }

  async addModel (vehicleModel: VehicleModel): Promise<VehicleModel> {
    return await this.dbClient.executeProcedure<VehicleModel>({
      nameProcedure: 'add_vehicle_model',
      parameters: [vehicleModel.getIdBrand(), vehicleModel.getName()]
    })
  }
}
