import { Request, Response } from 'express'
import { ResponseModel } from '../../../../shared/ResponseModel'
import { AddVehicleBrandDto } from '../../../../application/dtos/vehicle/brand/addVehicleBrand'
import { getVehicleBrands, addVehicleBrand } from '../../../../infrastructure/dependencies/container'
// eslint-disable-next-line
export class BrandController {
  static async getAllVehicleBrands (req: Request, res: Response): Promise<void> {
    const brands = await getVehicleBrands.execute()
    ResponseModel.success({ res, data: brands, message: 'Brands obtained successfully' })
  }

  static async addVehicleBrand (req: Request, res: Response): Promise<void> {
    const addVehicleBrandDto = new AddVehicleBrandDto(req.body.name)
    const brand = await addVehicleBrand.execute(addVehicleBrandDto)
    ResponseModel.success({ res, data: brand, message: 'Brand added successfully' })
  }
}
