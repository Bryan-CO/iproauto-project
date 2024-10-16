import { ResponseModel } from '../../../../shared/ResponseModel'
import { getVehicleFuels } from '../../../dependencies/vehicle/fuel/vehicleFuel.container'
import { Request, Response } from 'express'

// eslint-disable-next-line
export class VehicleFuelController {
  static async getAllVehicleFuels (req: Request, res: Response): Promise<void> {
    const fuels = await getVehicleFuels.execute()
    ResponseModel.success({ res, data: fuels, message: 'Fuels obtained successfully' })
  }
}
