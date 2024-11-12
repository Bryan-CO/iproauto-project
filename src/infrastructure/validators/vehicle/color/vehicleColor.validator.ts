import { body } from 'express-validator'
const generateErrorIsNotString = (variable: string): string => `${variable} deber ser de tipo String`
const generateErrorIsEmpty = (variable: string): string => `Se requiere el campo ${variable}`
export const addVehicleColorValidator = [
  body('name')
    .notEmpty()
    .withMessage(generateErrorIsEmpty('name'))
    .isString()
    .withMessage(generateErrorIsNotString('name'))
    .trim()
]
