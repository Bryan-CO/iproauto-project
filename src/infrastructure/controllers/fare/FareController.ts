import { ResponseModel } from '../../../shared/ResponseModel'
import { getFares } from '../../dependencies/fare/fare.container'

// eslint-disable-next-line
export class FareController {
  static async getFares (req: any, res: any): Promise<void> {
    const fares = await getFares.execute()
    ResponseModel.success({ res, data: fares, message: 'Successfully retrieved fares' })
  }
}
