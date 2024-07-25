import { Router } from "express";
import { Shipment } from "../classes/shipmentClasses.js";
import { pathFileShipments } from "./index.js";

const router = Router();
let shipment = new Shipment();

router.post("/", async(req,res)=>{
    shipment = new Shipment(req.body.item, req.body.quantity, req.body.wareHouseId, req.body.vehicleId);
    await shipment.postData(req,pathFileShipments);
    res.status(201).json({message: "Data created successfully"});
});
router.get("/", async(req,res)=>{
    const data = await shipment.getData(pathFileShipments);
    res.status(200).json({shipments: data});
});
router.get("/:id", async(req,res)=>{
    const dataId = await shipment.getDataForId(req,pathFileShipments);
    res.status(200).json({message: "Data found successfully", shipments: dataId});
})
router.put("/:id", async(req,res)=>{
    await shipment.putData(req,pathFileShipments);
    res.status(200).json({message: "Data updated successfully"});
});
router.delete("/:id", async(req,res)=>{
    await shipment.deleteData(req,pathFileShipments);
    res.status(200).json({message: "Data deleted successfully"});
})
export default router;