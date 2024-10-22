import { AddEnterpriseClientDTO } from '../../../../application/dtos/vehicle/person/addEnterpriseClient'
import { AddNaturalClientDTO } from '../../../../application/dtos/vehicle/person/addNaturalClient'
import { ResponseModel } from '../../../../shared/ResponseModel'
import { getClientsSummary } from '../../../dependencies/person/client.container'
import { addEnterpriseClient } from '../../../dependencies/person/enterpriseClient.container'
import { addNaturalClient } from '../../../dependencies/person/naturalClient.container'
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
}
