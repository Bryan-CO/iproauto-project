import { DbToVehicleBrands } from '../../../../adapters/mappers/vehicle/brand/brand.mapper'
import { IVehicleBrandDatasource } from '../../../../domain/datasources/vehicle/brand/brand.datasource'
import { VehicleBrand } from '../../../../domain/entities/vehicle/Brand'
import { IVehicleBrandRepository } from '../../../../domain/repositories/vehicle/brand/brand.repo'

export class VehicleBrandRepository implements IVehicleBrandRepository {
  private readonly brandDatasource: IVehicleBrandDatasource
  constructor (brandDatasource: IVehicleBrandDatasource) {
    this.brandDatasource = brandDatasource
  }

  async getAllBrands (): Promise<VehicleBrand[]> {
    const brands = await this.brandDatasource.getAllBrands()
    return DbToVehicleBrands(brands)
  }

  async addBrand (brand: VehicleBrand): Promise<VehicleBrand> {
    return await this.brandDatasource.addBrand(brand)
  }

  async findByBrand (brand: string): Promise<VehicleBrand> {
    return await this.brandDatasource.findByBrand(brand)
  }
}
