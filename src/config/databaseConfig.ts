/* eslint-disable */
export const DbConfig = {
  HOST: process.env.DB_HOST || 'localhost',
  PORT: Number(process.env.DB_PORT || 5432),
  USERNAME: process.env.DB_USERNAME || 'postgres',
  PASSWORD: process.env.DB_PASSWORD || 'postgres',
  DATABASE: process.env.DB_DATABASE || 'iproauto'
}
