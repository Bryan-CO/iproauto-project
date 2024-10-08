import { AppConfig } from './config/appConfig'
import { ServerConfig } from './config/serverConfig'
import { AppRoutes } from './infrastructure/routes'
import { AppServer } from './infrastructure/server'

(() => {
  console.log('Running in:', AppConfig.NODE_ENV)
  void executeServer()
})()

async function executeServer (): Promise<void> {
  const server = new AppServer()
  await server.start({
    port: ServerConfig.PORT,
    routes: AppRoutes.getRoutes()
  })
}
