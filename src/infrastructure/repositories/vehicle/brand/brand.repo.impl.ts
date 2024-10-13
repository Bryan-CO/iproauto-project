import { IVehicleBrandDatasource } from '../../../../domain/datasources/vehicle/brand/brand.datasource'
import { VehicleBrand } from '../../../../domain/entities/vehicle/Brand'
import { IBrandRepository } from '../../../../domain/repositories/vehicle/brand/brand.repo'

export class BrandRepository implements IBrandRepository {
  constructor (private readonly brandDatasource: IVehicleBrandDatasource) {
    this.brandDatasource = brandDatasource
  }

  async getAllBrands (): Promise<VehicleBrand[]> {
    return await this.brandDatasource.getAllBrands()
  }

  async addBrand (brand: VehicleBrand): Promise<VehicleBrand> {
    return await this.brandDatasource.addBrand(brand)
  }
}
