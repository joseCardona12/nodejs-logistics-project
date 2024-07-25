import { Router } from "express";
import { pathFileWarehouses } from "./index.js";
import { Warehouse } from "../classes/warehouseClasses.js";

const router = Router();
let warehouse = new Warehouse();

router.post("/", async(req,res)=>{
    warehouse = new Warehouse(req.body.name, req.body.location, req.body.driver_id, req.body.vehicle_id);
    await warehouse.postData(req,pathFileWarehouses);
    res.status(201).json({message: "Data created successfully"});
});
router.get("/", async(req,res)=>{
    const data = await warehouse.getData(pathFileWarehouses);
    res.status(200).json({warehouses: data});
});
router.get("/:id", async(req,res)=>{
    const dataId = await warehouse.getDataForId(req,pathFileWarehouses);
    res.status(200).json({message: "Data found successfully", warehouses: dataId});
})
router.put("/:id", async(req,res)=>{
    await warehouse.putData(req,pathFileWarehouses);
    res.status(200).json({message: "Data updated successfully"});
});
router.delete("/:id", async(req,res)=>{
    await warehouse.deleteData(req,pathFileWarehouses);
    res.status(200).json({message: "Data deleted successfully"});
})
export default router;