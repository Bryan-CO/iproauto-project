import { Request, Response, Router } from 'express'

// eslint-disable-next-line
export class AppRoutes {
  static getRoutes (): Router {
    const router = Router()
    const a = Router()
    // Ruta de ejemplo
    a.get('/', (req: Request, res: Response) => {
      res.send('XD')
    })
    router.use('/a', a)
    return router
  }
}
