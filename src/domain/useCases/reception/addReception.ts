import { AddReceptionDTO } from '../../../application/dtos/reception/addReception'
import { Reception } from '../../entities/receptions/Reception'

export interface IAddReception {
  execute: (reception: AddReceptionDTO, extensionImage?: string) => Promise<Reception>
}
