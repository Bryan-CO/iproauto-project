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
    .trim()
    .customSanitizer(value => value === '' ? undefined : value)
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
    .trim()
    .customSanitizer(value => value === '' ? undefined : value)
    .optional()
    .isString()
    .withMessage(generateErrorIsNotString('address')),
  body('selfPhone')
    .trim()
    .customSanitizer(value => value === '' ? undefined : value)
    .optional()
    .isString()
    .withMessage(generateErrorIsNotString('selfPhone')),
  body('referencePhone')
    .trim()
    .customSanitizer(value => value === '' ? undefined : value)
    .optional()
    .isString()
    .withMessage(generateErrorIsNotString('referencePhone')),
  body('email')
    .trim()
    .customSanitizer(value => value === '' ? undefined : value)
    .optional()
    .isString()
    .withMessage(generateErrorIsNotString('email')),
  body('observations')
    .trim()
    .customSanitizer(value => value === '' ? undefined : value)
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
    .trim()
    .customSanitizer(value => value === '' ? undefined : value)
    .optional()
    .isString()
    .withMessage(generateErrorIsNotString('names')),
  body('lastNames')
    .trim()
    .customSanitizer(value => value === '' ? undefined : value)
    .optional()
    .isString()
    .withMessage(generateErrorIsNotString('lastNames'))
]

export const addEnterpriseClientValidator = [
  body('idDocumentType')
    .optional()
    .toInt()
    .isInt({
      min: 1
    })
    .withMessage(generateErrorIsNotInt('idDocumnetType')),
  body('documentNumber')
    .trim()
    .customSanitizer(value => value === '' ? undefined : value)
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
    .trim()
    .customSanitizer(value => value === '' ? undefined : value)
    .optional()
    .isString()
    .withMessage(generateErrorIsNotString('address')),
  body('selfPhone')
    .trim()
    .customSanitizer(value => value === '' ? undefined : value)
    .optional()
    .isString()
    .withMessage(generateErrorIsNotString('selfPhone')),
  body('referencePhone')
    .trim()
    .customSanitizer(value => value === '' ? undefined : value)
    .optional()
    .isString()
    .withMessage(generateErrorIsNotString('referencePhone')),
  body('email')
    .trim()
    .customSanitizer(value => value === '' ? undefined : value)
    .optional()
    .isString()
    .withMessage(generateErrorIsNotString('email')),
  body('observations')
    .trim()
    .customSanitizer(value => value === '' ? undefined : value)
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
  body('companyName')
    .trim()
    .customSanitizer(value => value === '' ? undefined : value)
    .optional()
    .isString()
    .withMessage(generateErrorIsNotString('names')),
  body('contactPerson')
    .trim()
    .customSanitizer(value => value === '' ? undefined : value)
    .optional()
    .isString()
    .withMessage(generateErrorIsNotString('lastNames')),
  body('contactPhone')
    .trim()
    .customSanitizer(value => value === '' ? undefined : value)
    .optional()
    .isString()
    .withMessage(generateErrorIsNotString('lastNames'))
]
