import { AddEnterpriseClientDTO } from '../../../../application/dtos/vehicle/person/addEnterpriseClient'
import { AddNaturalClientDTO } from '../../../../application/dtos/vehicle/person/addNaturalClient'
import { ResponseModel } from '../../../../shared/ResponseModel'
import { getClientsSummary, getDocumentTypes } from '../../../dependencies/person/client.container'
import { addEnterpriseClient, getEnterpriseClientById } from '../../../dependencies/person/enterpriseClient.container'
import { addNaturalClient, getNaturalClientById } from '../../../dependencies/person/naturalClient.container'
import { Request, Response } from 'express'

// eslint-disable-next-line
export class ClientController {
  static async addNaturalClient (req: Request, res: Response): Promise<void> {
    const { idDocumentType, documentNumber, idProvince, idDistrict, address, selfPhone, referencePhone, email, observations, idFare, names, lastNames } = req.body
    const addNaturalClientDTO = new AddNaturalClientDTO(idDocumentType, documentNumber, idProvince, idDistrict, address, selfPhone, referencePhone, email, observations, idFare, names, lastNames)
    const naturalClient = await addNaturalClient.execute(addNaturalClientDTO)
    ResponseModel.success({ res, data: naturalClient, message: 'Natural Client added successfully' })
  }

  static async addEnterpriseClient (req: Request, res: Response): Promise<void> {
    const { idDocumentType, documentNumber, companyName, idProvince, idDistrict, address, selfPhone, referencePhone, email, observations, idFare, contactPerson, contactPhone } = req.body
    const addEnterpriseClientDTO = new AddEnterpriseClientDTO(idDocumentType, documentNumber, idProvince, idDistrict, address, selfPhone, referencePhone, email, observations, idFare, companyName, contactPerson, contactPhone)
    const enterpriseClient = await addEnterpriseClient.execute(addEnterpriseClientDTO)
    ResponseModel.success({ res, data: enterpriseClient, message: 'Enterprise Client added successfully' })
  }

  static async getClientsSummary (req: Request, res: Response): Promise<void> {
    const clientSummary = await getClientsSummary.execute()
    ResponseModel.success({ res, data: clientSummary, message: 'Clients summary successfully' })
  }

  static async getDocumentTypes (req: Request, res: Response): Promise<void> {
    const documentTypes = await getDocumentTypes.execute()
    ResponseModel.success({ res, data: documentTypes, message: 'Document types successfully' })
  }

  static async getNaturalClientById (req: Request, res: Response): Promise<void> {
    const { idNaturalClient } = req.params
    const naturalClient = await getNaturalClientById.execute(Number(idNaturalClient))
    ResponseModel.success({ res, data: naturalClient, message: 'Natural Client by id successfully' })
  }

  static async getEnterpriseClientById (req: Request, res: Response): Promise<void> {
    const { idEnterpriseClient } = req.params
    const enterpriseClient = await getEnterpriseClientById.execute(Number(idEnterpriseClient))
    ResponseModel.success({ res, data: enterpriseClient, message: 'Enterprise Client by id successfully' })
  }
}
