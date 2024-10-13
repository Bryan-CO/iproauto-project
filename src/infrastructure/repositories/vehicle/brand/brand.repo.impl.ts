import { IVehicleBrandDatasource } from '../../../../domain/datasources/vehicle/brand/brand.datasource'
import { VehicleBrand } from '../../../../domain/entities/vehicle/Brand'
import { IVehicleBrandRepository } from '../../../../domain/repositories/vehicle/brand/brand.repo'

export class BrandRepository implements IVehicleBrandRepository {
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
