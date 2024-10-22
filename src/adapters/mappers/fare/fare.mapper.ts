import { Fare } from '../../../domain/entities/persons/Fare'

export function DbToFares (dbFares: any[]): Fare[] {
  const fares: Fare[] = dbFares.map((fare: any) => {
    return new Fare(fare.id_fare, fare.name)
  })
  return fares
}
