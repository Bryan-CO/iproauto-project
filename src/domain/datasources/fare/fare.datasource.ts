import { Fare } from '../../entities/persons/Fare'

export interface IFareDataSource {
  getFares: () => Promise<Fare[]>
}
