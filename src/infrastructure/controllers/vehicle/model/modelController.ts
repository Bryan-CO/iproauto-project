import { Request, Response } from 'express'
import { getVehicleBrands, getVehicleModelsByBrandId } from '../../../dependencies/vehicle/model/vehicleModel.container'
import { ResponseModel } from '../../../../shared/ResponseModel'
// eslint-disable-next-line
export class VehicleModelController {
  static async getAllVehicleModels (req: Request, res: Response): Promise<void> {
    const models = await getVehicleBrands.execute()
    ResponseModel.success({ res, data: models, message: 'Models obtained successfully' })
  }

  static async getVehicleModelsByBrandId (req: Request, res: Response): Promise<void> {
    const { idBrand } = req.params
    const models = await getVehicleModelsByBrandId.execute(Number(idBrand))
    ResponseModel.success({ res, data: models, message: 'Models obtained successfully' })
  }
}
