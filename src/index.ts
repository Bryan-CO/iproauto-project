import { AppConfig } from './config/appConfig'
import { ServerConfig } from './config/serverConfig'
import { AppRoutes } from './infrastructure/appRoutes'
import { DatabaseClient } from './infrastructure/db/databaseClient.impl'
import { AppServer } from './infrastructure/server'

(() => {
  console.log('Running in:', AppConfig.NODE_ENV)
  void executeServer()
})()

async function executeServer (): Promise<void> {
  // Probar conexion antes de iniciar el servidor
  await new DatabaseClient().testConnection()

  const server = new AppServer()
  await server.start({
    port: ServerConfig.PORT,
    routes: AppRoutes.getRoutes()
  })
}
