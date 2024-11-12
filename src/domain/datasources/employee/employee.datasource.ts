export interface IEmployeeDataSource {
  getEmployees: () => Promise<any>
}
