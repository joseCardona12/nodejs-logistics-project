import express from "express";
import driverRoutes from "./driverRoutes.js";
import shipmentRoutes from "./shipmentRoutes.js";
import warehouseRoutes from "./warehouseRoutes.js";
import vehicleRoutes from "./vehicleRoutes.js";
import {fileURLToPath} from "url";
import path from "path";
import { Util } from "../classes/utilClasses.js";

const __filename = fileURLToPath(import.meta.url); // Obtain path absolutely of file in formart URL. The function will convert the URL to path
const __dirname = path.dirname(__filename); // Obtain path of directory file
export const pathFileWarehouses = Util.getPathFileEntities(__dirname, "warehouses");
export const pathFileDrivers = Util.getPathFileEntities(__dirname, "drivers");
export const pathFileShipments = Util.getPathFileEntities(__dirname, "shipments");
export const pathFileVehicles = Util.getPathFileEntities(__dirname, "vehicles");

const router = express.Router();
router.use("/warehouses", warehouseRoutes);
router.use("/drivers", driverRoutes);
router.use("/shipments", shipmentRoutes);
router.use("/vehicles", vehicleRoutes)
// router.use("/shipments", shipmentRoutes);

export default router;