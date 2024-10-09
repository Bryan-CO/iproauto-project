import { Response } from 'express'
interface ErrorOptions {
  res: Response
  statusCode?: number
  error: string
}
interface SuccessOptions<T> {
  res: Response
  statusCode?: number
  data: T
  message: string
}

interface ResponseBase<T = null> {
  success: boolean
  data?: T
  message?: string
  error: string | null
}

// eslint-disable-next-line
export class ResponseModel {
  public static success<T> (options: SuccessOptions<T>): void {
    const { res, data, message, statusCode = 200 } = options
    const response: ResponseBase<T> = {
      success: true,
      data,
      message,
      error: null
    }
    res.status(statusCode).json(response)
  }

  public static error (options: ErrorOptions): void {
    const { res, statusCode = 500, error } = options
    const response: ResponseBase = {
      success: false,
      data: null,
      message: 'Error en la consulta',
      error
    }
    res.status(statusCode).json(response)
  }
}
