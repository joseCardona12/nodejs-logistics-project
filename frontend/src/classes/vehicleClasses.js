import { Shipment } from "./shipmentClasses.js";

export class Vehicle extends Shipment{
    constructor(model,year,driver_id){
        super();
        this.model = model;
        this.year = year;
        this.driver_id = driver_id;
    }
}