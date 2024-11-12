import { Vehicle } from '../../../domain/entities/vehicle/Vehicle'
import { IFileStorageRepository } from '../../../domain/repositories/file/fileStorage.repo'
import { IVehicleRepository } from '../../../domain/repositories/vehicle/vehicle.repo'
import { IAddVehicle } from '../../../domain/useCases/vehicle/addVehicle'
import { AddVehicleDto } from '../../dtos/vehicle/addVehicleDto'
import { EditVehicleDto } from '../../dtos/vehicle/editVehicleDto'

export class AddVehicle implements IAddVehicle {
  private readonly vehicleRepository: IVehicleRepository
  private readonly fileStorageRepository: IFileStorageRepository

  constructor (vehicleRepository: IVehicleRepository, fileStorageRepository: IFileStorageRepository) {
    this.fileStorageRepository = fileStorageRepository
    this.vehicleRepository = vehicleRepository
  }

  async execute (addVehicleDto: AddVehicleDto, extensionImage?: string): Promise<Vehicle | undefined> {
    const existingVehicle = await this.vehicleRepository.getVehicleByLicensePlate(addVehicleDto.getLicensePlate())
    if (existingVehicle !== null) throw new Error('Vehicle with this license plate already exists')
    const addedVehicle = await this.vehicleRepository.addVehicle(addVehicleDto.toVehicle())
    // Subo la imagen
    const image = addVehicleDto.getImage()
    if (image !== undefined && extensionImage !== undefined) {
      const path = await this.fileStorageRepository.uploadFile(addVehicleDto.getLicensePlate(), extensionImage, image)
      const idVehicle = addedVehicle.getIdVehicle()
      if (idVehicle === null) throw new Error('No se pudo obtener el id del vehículo!')
      const editDto = new EditVehicleDto(idVehicle, null, null, null, null, null, null, null, null, null, path, null)
      const editedVehicle = await this.vehicleRepository.editVehicle(editDto.toVehicle())
      return editedVehicle
    }
    return addedVehicle
  }
}
