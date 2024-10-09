export interface ExecProdOptions {
  nameProcedure: string
  parameters?: any[]
  type?: 'SELECT' | 'CALL'
}

export interface QueryOptions {
  query: string
  parameters?: string[]
}

export interface IDatabaseClient {
  testConnection: () => Promise<void>
  executeProcedure: <T>(options: ExecProdOptions) => Promise<T>
  query: <T>(options: QueryOptions) => Promise<T>
}
