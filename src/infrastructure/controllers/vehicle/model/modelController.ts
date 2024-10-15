import { Request, Response } from 'express'
import { addVehicleModel, getVehicleBrands, getVehicleModelsByBrandId } from '../../../dependencies/vehicle/model/vehicleModel.container'
import { ResponseModel } from '../../../../shared/ResponseModel'
import { AddVehicleModelDto } from '../../../../application/dtos/vehicle/model/addVehicleModel'
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

  static async addVehicleModel (req: Request, res: Response): Promise<void> {
    const { idBrand, name } = req.body
    const addVehicleModelDto = new AddVehicleModelDto(idBrand, name)
    const model = await addVehicleModel.execute(addVehicleModelDto)
    ResponseModel.success({ res, data: model, message: 'Model added successfully' })
  }
}
