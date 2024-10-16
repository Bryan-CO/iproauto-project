import { VehicleColor } from "../../../entities/vehicle/Color";

export interface IGetVehicleColors{
    execute: () => Promise<VehicleColor[]>
}