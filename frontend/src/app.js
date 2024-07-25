import express from "express";
import dotenv from "dotenv";
import { errorHandler } from "./middlewares/errorHandler.js";
import routes from "./routes/index.js";

dotenv.config();
const PORT = process.env.PORT || 4000; // Is obtained the PORT of file .env
const app = express(); // Initialize express in app
app.use(express.json()); // Is used for transfer through of json // Middleware
app.use("/api", routes); // Middleware of routing
app.use(errorHandler); // Is called middleware errorHandler

app.listen(PORT, ()=>{
    console.log({message: `Server running on the port ${PORT}`})
})