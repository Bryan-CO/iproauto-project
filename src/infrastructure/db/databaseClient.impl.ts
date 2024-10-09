import { Pool } from 'pg'
import { DbConfig } from '../../config/databaseConfig'
import { ExecProdOptions, IDatabaseClient, QueryOptions } from '../../adapters/interfaces/databaseClient'

// Renombrar a DatabaseClient
export class DatabaseClient implements IDatabaseClient {
  private readonly con: Pool
  constructor () {
    this.con = new Pool({
      user: DbConfig.USERNAME,
      password: DbConfig.PASSWORD,
      host: DbConfig.HOST,
      port: DbConfig.PORT,
      database: DbConfig.DATABASE,
      ssl: {
        rejectUnauthorized: false
      }
      // options: '-c search_path=migracion'
    })
  }

  async executeProcedure<T>(options: ExecProdOptions): Promise<T> {
    const { nameProcedure, parameters, type } = options
    // eslint-disable-next-line
    if (!nameProcedure) {
      throw new Error('Procedure name is required')
    }

    let paramCount = 1
    // eslint-disable-next-line
    const params = parameters ? `(${parameters?.map(() => `$${paramCount++}`).join(', ')})` : '()'

    const query = `${type ?? 'SELECT'} ${nameProcedure}${params};`
    return (await this.con.query(query, parameters)).rows as T
  }

  async query<T>(options: QueryOptions): Promise<T> {
    const { query, parameters = [] } = options
    const result = (await this.con.query(query, parameters)).rows
    return result as T
  }

  async testConnection (): Promise<void> {
    try {
      await this.con.connect()
      // eslint-disable-next-line
      console.log(`${DbConfig.DATABASE.toUpperCase()} database connection succesfuly!`)
    } catch (error) {
      // eslint-disable-next-line
      console.log(`${DbConfig.DATABASE.toUpperCase()} database connection error! Message: ${error}`)
      process.exit(1)
    }
  }
}
