import { body } from 'express-validator'
const generateErrorIsNotString = (variable: string): string => `${variable} deber ser de tipo String`
const generateErrorIsEmpty = (variable: string): string => `Se requiere el campo ${variable}`
const generateDateIsNotValid = (variable: string): string => `${variable} no es una fecha valida`
const generateErrorIsNotInt = (variable: string): string => `${variable} debe ser un número entero positivo`
const generateErrorIsNotBoolean = (variable: string): string => `${variable} debe ser un boolean`
export const addReceptionValidator = [
  body('date')
    .optional()
    .isISO8601()
    .withMessage(generateDateIsNotValid('date')),
  body('idVehicle')
    .if(() => !false)
    .notEmpty()
    .withMessage(generateErrorIsEmpty('idVehicle'))
    .toInt()
    .isInt({
      min: 1
    })
    .withMessage(generateErrorIsNotInt('idVehicle')),
  body('kilometers')
    .notEmpty()
    .withMessage(generateErrorIsEmpty('kilometers'))
    .toInt()
    .isInt({
      min: 1
    })
    .withMessage(generateErrorIsNotInt('kilometers')),
  body('towedIn')
    .notEmpty()
    .withMessage(generateErrorIsEmpty('towedIn'))
    .toBoolean()
    .isBoolean()
    .withMessage(generateErrorIsNotBoolean('towedIn')),
  body('idFuelLevel')
    .notEmpty()
    .withMessage(generateErrorIsEmpty('idFuelLevel'))
    .toInt()
    .isInt({
      min: 1
    })
    .withMessage(generateErrorIsNotInt('idFuelLevel')),
  body('idEmployee')
    .notEmpty()
    .withMessage(generateErrorIsEmpty('idEmployee'))
    .toInt()
    .isInt({
      min: 1
    })
    .withMessage(generateErrorIsNotInt('idEmployee')),
  body('promisedDate')
    .notEmpty()
    .withMessage(generateErrorIsEmpty('promisedDate'))
    .isISO8601()
    .withMessage(generateDateIsNotValid('promisedDate')),
  body('nonOwnerPerson')
    .optional()
    .isString()
    .withMessage(generateErrorIsNotString('nonOwnerPerson'))
    .trim(),
  body('nonOwnerPhone')
    .optional()
    .isString()
    .withMessage(generateErrorIsNotString('nonOwnerPhone'))
    .trim(),
  body('stateImageUrl')
    .optional()
    .isURL()
    .withMessage(generateErrorIsNotString('stateImageUrl'))
    .trim(),
  body('repairNotes')
    .optional()
    .isString()
    .withMessage(generateErrorIsNotString('repairNotes'))
    .trim(),
  body('soatExpirationDate')
    .notEmpty()
    .withMessage(generateErrorIsEmpty('soatExpirationDate'))
    .isDate()
    .withMessage(generateDateIsNotValid('soatExpirationDate')),
  body('nextServiceDate')
    .notEmpty()
    .withMessage(generateErrorIsEmpty('nextServiceDate'))
    .isDate()
    .withMessage(generateDateIsNotValid('nextServiceDate')),
  body('inspectionExpirationDate')
    .notEmpty()
    .withMessage(generateErrorIsEmpty('inspectionExpirationDate'))
    .isDate()
    .withMessage(generateDateIsNotValid('inspectionExpirationDate'))
]
export const updateReceptionValidator = [
  body().custom(value => {
    if (Object.keys(value).length === 0) {
      throw new Error('Debe proporcionar al menos un campo para actualizar')
    }
    return true
  }),
  body('date')
    .optional()
    .isISO8601()
    .withMessage(generateDateIsNotValid('date')),
  body('idVehicle')
    .optional()
    .toInt()
    .isInt({
      min: 1
    })
    .withMessage(generateErrorIsNotInt('idVehicle')),
  body('kilometers')
    .optional()
    .toInt()
    .isInt({
      min: 1
    })
    .withMessage(generateErrorIsNotInt('kilometers')),
  body('towedIn')
    .optional()
    .toBoolean()
    .isBoolean()
    .withMessage(generateErrorIsNotBoolean('towedIn')),
  body('idEmployee')
    .optional()
    .toInt()
    .isInt({
      min: 1
    })
    .withMessage(generateErrorIsNotInt('idEmployee')),
  body('promisedDate')
    .optional()
    .isISO8601()
    .withMessage(generateDateIsNotValid('promisedDate')),
  body('nonOwnerPerson')
    .optional()
    .isString()
    .withMessage(generateErrorIsNotString('nonOwnerPerson'))
    .trim(),
  body('nonOwnerPhone')
    .optional()
    .isString()
    .withMessage(generateErrorIsNotString('nonOwnerPhone'))
    .trim(),
  body('stateImageUrl')
    .optional()
    .isURL()
    .withMessage(generateErrorIsNotString('stateImageUrl'))
    .trim(),
  body('repairNotes')
    .optional()
    .isString()
    .withMessage(generateErrorIsNotString('repairNotes'))
    .trim(),
  body('soatExpirationDate')
    .optional()
    .isDate()
    .withMessage(generateDateIsNotValid('soatExpirationDate')),
  body('nextServiceDate')
    .optional()
    .isDate()
    .withMessage(generateDateIsNotValid('nextServiceDate')),
  body('inspectionExpirationDate')
    .optional()
    .isDate()
    .withMessage(generateDateIsNotValid('inspectionExpirationDate'))
]
