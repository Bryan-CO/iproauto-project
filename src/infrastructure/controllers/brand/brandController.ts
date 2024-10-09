import { Request, Response } from 'express'
import { GetBrands } from '../../../application/useCases/getBrand.impl'
import { BrandRepository } from '../../repositories/brand.repo.impl'
import { ResponseModel } from '../../../shared/ResponseModel'

// eslint-disable-next-line
export class BrandController {
  static async getAllBrands (req: Request, res: Response): Promise<void> {
    const brands = await new GetBrands(new BrandRepository()).execute()
    ResponseModel.success({ res, data: brands, message: 'Brands obtained successfully' })
  }
}
