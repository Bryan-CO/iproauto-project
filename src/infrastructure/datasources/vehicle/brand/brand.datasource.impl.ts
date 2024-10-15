import { IDatabaseClient } from '../../../../adapters/interfaces/databaseClient'
import { IVehicleBrandDatasource } from '../../../../domain/datasources/vehicle/brand/brand.datasource'
import { VehicleBrand } from '../../../../domain/entities/vehicle/Brand'

export class VehicleBrandDatasource implements IVehicleBrandDatasource {
  private readonly dbClient: IDatabaseClient
  constructor (dbClient: IDatabaseClient) {
    this.dbClient = dbClient
  }

  async getAllBrands (): Promise<VehicleBrand[]> {
    const brands = await this.dbClient.executeProcedure<VehicleBrand[]>({
      nameProcedure: 'get_vehicle_brands'
    })
    return brands
  }

  async addBrand (dto: VehicleBrand): Promise<VehicleBrand> {
    const brand = await this.dbClient.executeProcedure<VehicleBrand>({
      nameProcedure: 'add_vehicle_brand',
      parameters: [dto.getName()]
    })
    return brand
  }

  async findByBrand (brand: string): Promise<VehicleBrand> {
    const brandFound = await this.dbClient.executeProcedure<VehicleBrand>({
      nameProcedure: 'find_vehicle_brand',
      parameters: [brand],
      onRow: true
    })
    return brandFound
  }
}
