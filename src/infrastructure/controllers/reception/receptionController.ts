import { Request, Response } from 'express'
import { ResponseModel } from '../../../shared/ResponseModel'
import { addReception, editReception, getReceptions } from '../../dependencies/reception/reception.container'
import { AddReceptionDTOBuilder } from '../../../application/dtos/reception/addReception'
import { EditReceptionDtoBuilder } from '../../../application/dtos/reception/editReception'
import { validationResult } from 'express-validator'

// eslint-disable-next-line
export class ReceptionController {
  static async getReceptions (req: Request, res: Response): Promise<void> {
    const receptions = await getReceptions.execute()
    ResponseModel.success({ res, data: receptions, message: 'Successfully retrieved receptions' })
  }

  static async addReception (req: Request, res: Response): Promise<void> {
    const { date, idVehicle, kilometers, towedIn, idFuelLevel, idEmployee, promisedDate, nonOwnerPerson, nonOwnerPhone, stateImageUrl, repairNotes, soatExpirationDate, nextServiceDate, inspectionExpirationDate } = req.body
    const image = req.file?.buffer ?? null
    const addReceptionDTO = new AddReceptionDTOBuilder()
      .withDate(date)
      .withIdVehicle(idVehicle)
      .withKilometers(kilometers)
      .withTowedIn(towedIn)
      .withFuelLevel(idFuelLevel)
      .withIdEmployee(idEmployee)
      .withPromisedDate(new Date(promisedDate))
      .withNonOwnerPerson(nonOwnerPerson)
      .withNonOwnerPhone(nonOwnerPhone)
      .withStateImageUrl(stateImageUrl)
      .withRepairNotes(repairNotes)
      .withSoatExpirationDate(new Date(soatExpirationDate))
      .withNextServiceDate(new Date(nextServiceDate))
      .withInspectionExpirationDate(new Date(inspectionExpirationDate))
      .withImage(image)
      .build()
    const reception = await addReception.execute(addReceptionDTO, req.file?.mimetype.split('/')[1])
    ResponseModel.success({ res, data: reception, message: 'Reception added successfully' })
  }

  static async updateReception (req: Request, res: Response): Promise<void> {
    const { id } = req.params
    const { date, idVehicle, kilometers, towedIn, idEmployee, promisedDate, nonOwnerPerson, nonOwnerPhone, stateImageUrl, repairNotes, soatExpirationDate, nextServiceDate, inspectionExpirationDate } = req.body
    if (!validationResult(req).isEmpty()) {
      console.log(validationResult(req))
      return
    }
    const image = req.file?.buffer ?? null
    const editReceptionDto = new EditReceptionDtoBuilder()
      .withIdReception(Number(id))
      .withDate(date)
      .withIdVehicle(idVehicle)
      .withKilometers(kilometers)
      .withTowedIn(towedIn)
      .withIdEmployee(idEmployee)
      .withPromisedDate(promisedDate)
      .withNonOwnerPerson(nonOwnerPerson)
      .withNonOwnerPhone(nonOwnerPhone)
      .withStateImageUrl(stateImageUrl)
      .withRepairNotes(repairNotes)
      .withSoatExpirationDate(soatExpirationDate)
      .withNextServiceDate(nextServiceDate)
      .withInspectionExpirationDate(inspectionExpirationDate)
      .withImage(image)
      .build()
    const reception = await editReception.execute(editReceptionDto, req.file?.mimetype.split('/')[1])
    ResponseModel.success({ res, data: reception, message: 'Reception updated successfully' })
  }
}
