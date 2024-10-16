import { ResponseModel } from '../../../../shared/ResponseModel'
import { getVehicleColors } from '../../../dependencies/vehicle/color/vehicleColor.container'
import { Request, Response } from 'express'
// eslint-disable-next-line
export class VehicleColorController {
  static async getAllVehicleColors (req: Request, res: Response): Promise<void> {
    const colors = await getVehicleColors.execute()
    ResponseModel.success({ res, data: colors, message: 'Colors obtained successfully' })
  }
}
