import { DbToVehicleModels } from '../../../../adapters/mappers/vehicle/model/model.mapper'
import { IVehicleModelDatasource } from '../../../../domain/datasources/vehicle/model/model.datasource'
import { VehicleModel } from '../../../../domain/entities/vehicle/Model'
import { IVehicleModelRepository } from '../../../../domain/repositories/vehicle/model/model.repo'

export class VehicleModelRepository implements IVehicleModelRepository {
  constructor (private readonly modelDatasource: IVehicleModelDatasource) {
    this.modelDatasource = modelDatasource
  }

  async getAllModels (): Promise<VehicleModel[]> {
    const models = await this.modelDatasource.getAllModels()
    return DbToVehicleModels(models)
  }

  async getModelsByBrandId (idBrand: number): Promise<VehicleModel[]> {
    const models = await this.modelDatasource.getModelsByBrandId(idBrand)
    return DbToVehicleModels(models)
  }

  async findByModel (model: string): Promise<VehicleModel> {
    return await this.modelDatasource.findByModel(model)
  }

  async addModel (vehicleModel: VehicleModel): Promise<VehicleModel> {
    return await this.modelDatasource.addModel(vehicleModel)
  }
}
