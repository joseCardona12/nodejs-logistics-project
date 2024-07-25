import { Shipment } from "./shipmentClasses.js";

export class Warehouse extends Shipment{
    constructor(name, location, driver_id, vehicle_id){
        super(vehicle_id);
        this.name = name;
        this.location = location;
        this.driver_id = driver_id;
    }
}