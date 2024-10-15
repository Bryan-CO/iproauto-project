import { NextFunction, Request, Response } from 'express'
import { ResponseModel } from '../../shared/ResponseModel'

export function ErrorHandler (err: Error, req: Request, res: Response, next: NextFunction): void {
  console.log(err)
  ResponseModel.error({ res, error: err.message })
}
