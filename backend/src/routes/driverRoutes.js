import { Router } from "express";
import { Driver } from "../classes/driverClasses.js";
import { pathFileDrivers } from "./index.js";

const router = Router();
let driver = new Driver();

router.post("/", async(req,res)=>{
    driver = new Driver(req.body.name, req.body.shipment_id);
    await driver.postData(req,pathFileDrivers);
    res.status(201).json({message: "Data created successfully"});
});
router.get("/", async(req,res)=>{
    const data = await driver.getData(pathFileDrivers);
    res.status(200).json({drivers: data});
});
router.get("/:id", async(req,res)=>{
    const dataId = await driver.getDataForId(req,pathFileDrivers);
    res.status(200).json({message: "Data found successfully", drivers: dataId});
})
router.put("/:id", async(req,res)=>{
    await driver.putData(req,pathFileDrivers);
    res.status(200).json({message: "Data updated successfully"});
});
router.delete("/:id", async(req,res)=>{
    await driver.deleteData(req,pathFileDrivers);
    res.status(200).json({message: "Data deleted successfully"});
})

export default router;