import { Request, Response } from 'express'
import { GetVehicleBrands } from '../../../../application/useCases/vehicle/brand/getBrand.impl'
import { BrandRepository } from '../../../repositories/vehicle/brand/brand.repo.impl'
import { ResponseModel } from '../../../../shared/ResponseModel'
import { VehicleBrandDatasource } from '../../../datasources/vehicle/brand/brand.datasource.impl'
import { DatabaseClient } from '../../../db/databaseClient.impl'
import { AddVehicleBrand } from '../../../../application/useCases/vehicle/brand/addVehicleBrand.impl'
import { AddVehicleBrandDto } from '../../../../application/dtos/vehicle/brand/addVehicleBrand'

// eslint-disable-next-line
export class BrandController {
  static async getAllVehicleBrands (req: Request, res: Response): Promise<void> {
    const brands = await new GetVehicleBrands(new BrandRepository(new VehicleBrandDatasource(new DatabaseClient()))).execute()
    ResponseModel.success({ res, data: brands, message: 'Brands obtained successfully' })
  }

  static async addVehicleBrand (req: Request, res: Response): Promise<void> {
    const addVehicleBrandDto = new AddVehicleBrandDto(req.body.name)
    const brand = await new AddVehicleBrand(new BrandRepository(new VehicleBrandDatasource(new DatabaseClient()))).execute(addVehicleBrandDto)
    ResponseModel.success({ res, data: brand, message: 'Brand added successfully' })
  }
}
