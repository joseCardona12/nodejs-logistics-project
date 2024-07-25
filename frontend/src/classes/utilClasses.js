import {promises as fs} from "fs";
import path from "path";
export class Util{
    constructor(){

    }

    static async readFileFs(pathFile){
        try{
            const data = await fs.readFile(pathFile, "utf-8");
            return JSON.parse(data);

        }catch(error){
            console.log({message: "Error with the method readFileFs", error: error})
        }
    }

    static async writeFileFs(pathFile,data){
        try{
            await fs.writeFile(pathFile, JSON.stringify(data,null,2), "utf-8");
        }catch(error){
            console.log({message: "Error with the method writeFileFs", error: error});
        }
    }

    static getPathFileEntities(dirname,typeName){
        return path.join(dirname, `../../../backend/${typeName}.json`);
    }
}