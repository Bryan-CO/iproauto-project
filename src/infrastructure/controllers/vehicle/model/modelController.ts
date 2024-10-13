import { GetVehicleModels } from '../../../../application/useCases/vehicle/model/getModels.impl'
import { GetVehicleModelsByBrandId } from '../../../../application/useCases/vehicle/model/getModelsByBrandId'
import { ResponseModel } from '../../../../shared/ResponseModel'
import { VehicleModelDatasource } from '../../../datasources/vehicle/model/model.datasource.impl'
import { DatabaseClient } from '../../../db/databaseClient.impl'
import { VehicleModelRepository } from '../../../repositories/vehicle/model/model.repo.impl'
import { Request, Response } from 'express'
// eslint-disable-next-line
export class VehicleModelController {
  static async getAllVehicleModels (req: Request, res: Response): Promise<void> {
    const models = await new GetVehicleModels(new VehicleModelRepository(new VehicleModelDatasource(new DatabaseClient()))).execute()
    ResponseModel.success({ res, data: models, message: 'Models obtained successfully' })
  }

  static async getVehicleModelsByBrandId (req: Request, res: Response): Promise<void> {
    const { idBrand } = req.params
    const models = await new GetVehicleModelsByBrandId(new VehicleModelRepository(new VehicleModelDatasource(new DatabaseClient()))).execute(Number(idBrand))
    ResponseModel.success({ res, data: models, message: 'Models obtained successfully' })
  }
}
