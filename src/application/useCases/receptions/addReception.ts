import { Reception } from '../../../domain/entities/receptions/Reception'
import { IFileStorageRepository } from '../../../domain/repositories/file/fileStorage.repo'
import { IReceptionRepository } from '../../../domain/repositories/reception/reception.repo'
import { IAddReception } from '../../../domain/useCases/reception/addReception'
import { AddReceptionDTO } from '../../dtos/reception/addReception'
import { EditReceptionDtoBuilder } from '../../dtos/reception/editReception'

export class AddReception implements IAddReception {
  private readonly receptionRepository: IReceptionRepository
  private readonly fileStorageRepository: IFileStorageRepository

  constructor (receptionRepository: IReceptionRepository, fileStorageRepository: IFileStorageRepository) {
    this.receptionRepository = receptionRepository
    this.fileStorageRepository = fileStorageRepository
  }

  async execute (addReceptionDTO: AddReceptionDTO, extensionImage?: string): Promise<Reception> {
    const rec = addReceptionDTO.toReception()
    rec.generateReceptionCode()
    const reception = await this.receptionRepository.addReception(rec)
    const image = addReceptionDTO.getImage()
    if (image !== null && extensionImage !== undefined) {
      const receptionCode = reception.getReceptionCode()
      const idReception = reception.getIdReception()
      if (receptionCode === null) throw new Error('No se pudo obtener el id del reception!')
      const path = await this.fileStorageRepository.uploadFile(receptionCode.toString(), extensionImage, image)
      const editDto = new EditReceptionDtoBuilder()
        .withIdReception(idReception)
        .withStateImageUrl(path)
        .build()
      const editedReception = await this.receptionRepository.editReception(editDto.toReception())
      return editedReception
    }
    return reception
  }
}
