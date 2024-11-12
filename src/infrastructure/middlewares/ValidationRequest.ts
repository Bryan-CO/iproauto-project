import { NextFunction, Request, Response } from 'express'
import { validationResult } from 'express-validator'

export const ValidationRequest = (req: Request, res: Response, next: NextFunction): void => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    throw new Error(errors.array()[0].msg)
  }
  next()
}
