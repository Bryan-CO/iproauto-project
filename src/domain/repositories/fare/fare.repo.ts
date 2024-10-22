import { Fare } from '../../entities/persons/Fare'

export interface IFareRepository {
  getFares: () => Promise<Fare[]>
}
