import { Fare } from '../../entities/persons/Fare'

export interface IGetFares {
  execute: () => Promise<Fare[]>
}
