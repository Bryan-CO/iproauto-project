import * as awilix from 'awilix'
import { DatabaseClient } from '../../db/databaseClient.impl'

const dbContainer = awilix.createContainer({
  injectionMode: awilix.InjectionMode.CLASSIC // Para no usar constructor({name}), sino constructor(name)
})

dbContainer.register({
  dbClient: awilix.asClass(DatabaseClient).singleton()
})

const dbClient = dbContainer.resolve<DatabaseClient>('dbClient')
export {
  dbClient
}
