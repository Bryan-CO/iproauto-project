import { body } from 'express-validator'
const generateErrorIsNotString = (variable: string): string => `${variable} deber ser de tipo String`
const generateErrorIsEmpty = (variable: string): string => `Se requiere el campo ${variable}`
const generateErrorIsNotInt = (variable: string): string => `${variable} debe ser un número entero positivo`
export const addVehicleModelValidator = [
  body('name')
    .notEmpty()
    .withMessage(generateErrorIsEmpty('name'))
    .isString()
    .withMessage(generateErrorIsNotString('name'))
    .trim(),
  body('idBrand')
    .notEmpty()
    .withMessage(generateErrorIsEmpty('idBrand'))
    .isInt({
      min: 1
    })
    .withMessage(generateErrorIsNotInt('idBrand'))
]
