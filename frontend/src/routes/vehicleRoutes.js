import { Router } from "express";
import { pathFileVehicles } from "./index.js";
import { Vehicle } from "../classes/vehicleClasses.js";

const router = Router();
let vehicle = new Vehicle();

router.post("/", async(req,res)=>{
    vehicle = new Vehicle(req.body.model, req.body.year, req.body.driver_id);
    await vehicle.postData(req,pathFileVehicles);
    res.status(201).json({message: "Data created successfully"});
});
router.get("/", async(req,res)=>{
    const data = await vehicle.getData(pathFileVehicles);
    res.status(200).json({vehicles: data});
});
router.get("/:id", async(req,res)=>{
    const dataId = await vehicle.getDataForId(req,pathFileVehicles);
    res.status(200).json({message: "Data found successfully", vehicles: dataId});
})
router.put("/:id", async(req,res)=>{
    await vehicle.putData(req,pathFileVehicles);
    res.status(200).json({message: "Data updated successfully"});
});
router.delete("/:id", async(req,res)=>{
    await vehicle.deleteData(req,pathFileVehicles);
    res.status(200).json({message: "Data deleted successfully"});
})
export default router;