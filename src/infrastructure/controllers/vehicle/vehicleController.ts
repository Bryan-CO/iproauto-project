import { ResponseModel } from '../../../shared/ResponseModel'
import { Request, Response } from 'express'
import { addVehicle, getVehicleByLicensePlate } from '../../dependencies/vehicle/vehicle.container'
import { AddVehicleDto } from '../../../application/dtos/vehicle/addVehicleDto'
import { validationResult } from 'express-validator'
// import { FileStorageDataSource } from '../../datasources/file/fileStorage.datasource.impl'
// eslint-disable-next-line
export class VehicleController {
  static async getVehicleByLicensePlate (req: Request, res: Response): Promise<void> {
    const { licensePlate } = req.params
    const vehicle = await getVehicleByLicensePlate.execute(licensePlate)
    ResponseModel.success({ res, data: vehicle, message: 'Vehicle obtained successfully' })
  }

  static async addVehicle (req: Request, res: Response): Promise<void> {
    const { licensePlate, idBrand, idModel, idColor, year, engineCapacity, chassisNumber, idFuel, observations, urlImage, idPerson } = req.body
    if (!validationResult(req).isEmpty()) {
      console.log(validationResult(req))
      return
    }
    const image: Buffer | undefined = req.file?.buffer
    const dto = new AddVehicleDto(licensePlate, idBrand, idModel, idColor, year, engineCapacity, chassisNumber, idFuel, observations, urlImage, idPerson, image)
    const vehicle = await addVehicle.execute(dto, req.file?.mimetype.split('/')[1])
    ResponseModel.success({ res, data: vehicle, message: 'Vehicle added successfully' })
  }
}
