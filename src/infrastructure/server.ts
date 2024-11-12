import express, { Router } from 'express'
import { ErrorHandler } from './middlewares/ErrorHandler'

interface ServerOptions {
  port: number
  ip?: string
  routes: Router
}

export class AppServer {
  private readonly app = express()
  public async start (options: ServerOptions): Promise<void> {
    const { port, routes } = options
    this.setupMiddlewares()
    this.app.use('/api' /* Esto puede venir de un .env */, routes)
    this.app.use(ErrorHandler)
    this.app.listen(port, () => {
      console.log(`App escuchando en http://localhost:${port}`)
    })
  }

  private setupMiddlewares (): void {
    // Aquí irán todos los middlewares, aunque el de errores siempre va al último (en teoría creo)
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
    // Luego agregar el de cors
  }
}
