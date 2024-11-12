import { EditReceptionDto } from '../../../application/dtos/reception/editReception'
import { Reception } from '../../entities/receptions/Reception'

export interface IEditReception {
  execute: (reception: EditReceptionDto, extensionImage?: string) => Promise<Reception>

}
