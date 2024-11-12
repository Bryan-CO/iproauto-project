export interface IFileStorageDataSource {
  getToken: () => Promise<string>
  uploadFile: (filename: string, extensionFile: string, file: Buffer) => Promise<string>
  getUrl: (path: string) => Promise<string>
}
