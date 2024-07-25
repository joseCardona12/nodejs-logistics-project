import { Shipment } from "./shipmentClasses.js";

export class Driver extends Shipment{
    constructor(name, shipment_id){
        super(name);
        this.shipment_id = shipment_id
    }
}