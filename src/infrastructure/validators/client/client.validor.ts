import { body } from 'express-validator'
const generateErrorIsNotString = (variable: string): string => `${variable} deber ser de tipo String`
const generateErrorIsNotInt = (variable: string): string => `${variable} debe ser un número entero positivo`
export const addNaturalClientValidator = [
  body('idDocumentType')
    .optional()
    .toInt()
    .isInt({
      min: 1
    })
    .withMessage(generateErrorIsNotInt('idDocumnetType')),
  body('documentNumber')
    .optional()
    .isString()
    .withMessage(generateErrorIsNotString('documentNumber')),
  body('idProvince')
    .optional()
    .toInt()
    .isInt({
      min: 1
    })
    .withMessage(generateErrorIsNotInt('idProvince')),
  body('idDistrict')
    .optional()
    .toInt()
    .isInt({
      min: 1
    })
    .withMessage(generateErrorIsNotInt('idDistrict')),
  body('address')
    .optional()
    .isString()
    .withMessage(generateErrorIsNotString('address')),
  body('selfPhone')
    .optional()
    .isString()
    .withMessage(generateErrorIsNotString('selfPhone')),
  body('referencePhone')
    .optional()
    .isString()
    .withMessage(generateErrorIsNotString('referencePhone')),
  body('email')
    .optional()
    .isString()
    .withMessage(generateErrorIsNotString('email')),
  body('observations')
    .optional()
    .isString()
    .withMessage(generateErrorIsNotString('observations')),
  body('idFare')
    .optional()
    .toInt()
    .isInt({
      min: 1
    })
    .withMessage(generateErrorIsNotInt('idFare')),
  body('names')
    .optional()
    .isString()
    .withMessage(generateErrorIsNotString('names')),
  body('lastNames')
    .optional()
    .isString()
    .withMessage(generateErrorIsNotString('lastNames'))
]
