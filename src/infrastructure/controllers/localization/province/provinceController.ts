import { ResponseModel } from '../../../../shared/ResponseModel'
import { getAllProvinces } from '../../../dependencies/localization/province/province.container'
import { Request, Response } from 'express'
// eslint-disable-next-line
export class ProvinceController {
  static async getAllProvinces (req: Request, res: Response): Promise<void> {
    const provinces = await getAllProvinces.execute()
    ResponseModel.success({ res, data: provinces, message: 'Provinces obtained successfully' })
  }
}
