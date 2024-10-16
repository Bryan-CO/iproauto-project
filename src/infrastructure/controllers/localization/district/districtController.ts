import { ResponseModel } from '../../../../shared/ResponseModel'
import { Request, Response } from 'express'
import { getDistrictsByProvince } from '../../../dependencies/localization/district/district.container'

// eslint-disable-next-line
export class DistrictController {
  static async getAllDistrictsByProvince (req: Request, res: Response): Promise<void> {
    const { idProvince } = req.params
    const districts = await getDistrictsByProvince.execute(Number(idProvince))
    ResponseModel.success({ res, data: districts, message: 'Districts obtained successfully' })
  }
}
