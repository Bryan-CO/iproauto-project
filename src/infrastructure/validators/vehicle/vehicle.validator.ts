import { body } from 'express-validator'
const generateErrorIsNotString = (variable: string): string => `${variable} deber ser de tipo String`
const generateErrorIsEmpty = (variable: string): string => `Se requiere el campo ${variable}`
const generateErrorIsNotInt = (variable: string): string => `${variable} debe ser un número entero positivo`
export const addVehicleValidator = [
  body('licensePlate')
    .notEmpty()
    .withMessage(generateErrorIsEmpty('licensePlate'))
    .isString()
    .withMessage(generateErrorIsNotString('licensePlate'))
    .trim(),
  body('idBrand')
    .notEmpty()
    .withMessage(generateErrorIsEmpty('idBrand'))
    .bail()
    .toInt()
    .isInt({
      min: 1
    })
    .withMessage(generateErrorIsNotInt('idBrand')),
  body('idModel')
    .notEmpty()
    .withMessage(generateErrorIsEmpty('idModel'))
    .toInt()
    .isInt({
      min: 1
    })
    .withMessage(generateErrorIsNotInt('idModel')),
  body('idColor')
    .notEmpty()
    .withMessage(generateErrorIsEmpty('idColor'))
    .toInt()
    .isInt({
      min: 1
    })
    .withMessage(generateErrorIsNotInt('idColor')),
  body('year')
    .notEmpty()
    .withMessage(generateErrorIsEmpty('year'))
    .toInt()
    .isInt({
      min: 1
    })
    .withMessage(generateErrorIsNotInt('year')),
  body('engineCapacity')
    .notEmpty()
    .withMessage(generateErrorIsEmpty('engineCapacity'))
    .toInt()
    .isInt({
      min: 1
    })
    .withMessage(generateErrorIsNotInt('engineCapacity')),
  body('chassisNumber')
    .notEmpty()
    .withMessage(generateErrorIsEmpty('chassisNumber'))
    .isString()
    .withMessage(generateErrorIsNotString('chassisNumber'))
    .trim(),
  body('idFuel')
    .notEmpty()
    .withMessage(generateErrorIsEmpty('idFuel'))
    .toInt()
    .isInt({
      min: 1
    })
    .withMessage(generateErrorIsNotInt('idFuel')),
  body('observations')
    .optional()
    .isString()
    .withMessage(generateErrorIsNotString('observations'))
    .trim(),
  body('urlImage')
    .optional()
    .isURL()
    .withMessage(generateErrorIsNotString('urlImage'))
    .trim(),
  body('idPerson')
    .optional()
    .toInt()
    .isInt({
      min: 1
    })
    .withMessage(generateErrorIsNotInt('idPerson'))
]
