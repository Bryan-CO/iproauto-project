import { IFileStorageDataSource } from '../../../domain/datasources/file/fileStorage.datasource'
import { IFileStorageRepository } from '../../../domain/repositories/file/fileStorage.repo'

export class FileStorageRepository implements IFileStorageRepository {
  private readonly fileStorageDataSource: IFileStorageDataSource
  constructor (fileStorageDataSource: IFileStorageDataSource) {
    this.fileStorageDataSource = fileStorageDataSource
  }

  async uploadFile (filename: string, extensionFile: string, file: Buffer): Promise<string> {
    const path = await this.fileStorageDataSource.uploadFile(filename, extensionFile, file)
    return path
  }

  async getUrl (path: string): Promise<string> {
    return ''
  }
}
