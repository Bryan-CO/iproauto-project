import { API_FILE_CONFIG } from '../../../config/apiFileConfig'
import { IFileStorageDataSource } from '../../../domain/datasources/file/fileStorage.datasource'
import { Dropbox } from 'dropbox'

export class FileStorageDataSource implements IFileStorageDataSource {
  private readonly dbx: Dropbox
  constructor () {
    this.dbx = new Dropbox({
      clientId: API_FILE_CONFIG.CLIENT_ID,
      clientSecret: API_FILE_CONFIG.CLIENT_SECRET,
      refreshToken: API_FILE_CONFIG.REFRESH_TOKEN
    })
  }

  async uploadFile (filename: string, extensionFile: string, file: Buffer): Promise<string> {
    const response = await this.dbx.filesUpload({ path: `/iproauto/${filename}.${extensionFile}`, contents: file, mode: { '.tag': 'overwrite' } })
    const path = response.result.path_lower
    if (path === undefined) {
      throw new Error('No se pudo subir el archivo')
    }
    return await this.getUrl(path)
  }

  async getUrl (path: string): Promise<string> {
    const existingLink = await this.dbx.sharingListSharedLinks({ path })
    console.log(existingLink)
    if (existingLink.result.links.length > 0) {
      return this.urlToRawImg(existingLink.result.links[0].url)
    }

    const response = await this.dbx.sharingCreateSharedLinkWithSettings({
      path
    })
    const url = response.result.url
    return this.urlToRawImg(url)
  }

  async getToken (): Promise<string> {
    return ''
  }

  urlToRawImg (url: string): string {
    const link = url.split('&dl=0')
    return link[0] + '&raw=1'
  }
}
