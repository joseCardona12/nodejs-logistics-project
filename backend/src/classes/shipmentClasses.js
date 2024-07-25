import { Util } from "./utilClasses.js";
export class Shipment{
    constructor(item, quantity, wareHouseId, vehicleId){
        this.item = item;
        this.quantity = quantity,
        this.wareHouseId = wareHouseId;
        this.vehicleId = vehicleId
    }

    async getData(pathFile){
        try{
            const data = await Util.readFileFs(pathFile);
            return data;

        }catch(error){
            console.log({message: "Error with the method getData", error: error});
        }
    }
    async getDataForId(req,pathFile){
        const data = await this.getData(pathFile);
        const dataId = data.find(object => object.id === req.params.id);
        if(!dataId){
            console.log({message: "Error with the method getDataForId"});
            return;
        }
        return dataId;
    }

    async postData(req,pathFile){
        const data = await this.getData(pathFile);
        const newData = {
            id: data.length +1,
            ...req.body
        }
        if(!newData){
            console.log({message: "Error with the method postData"});
            return;
        }
        data.push(newData);
        await Util.writeFileFs(pathFile,data);
    }
    async putData(req,pathFile){
        const data = await this.getData(pathFile);
        const foundIndexData = data.findIndex(object=>object.id === parseInt(req.params.id));
        if(foundIndexData === -1){
            console.log({message: "Found index data error with the method putData"});
            return;
        }
        const updateData ={
            ...data[foundIndexData],
            ...req.body
        }
        data[foundIndexData] = updateData;
        await Util.writeFileFs(pathFile,data);
    }
    async deleteData(req,pathFile){
        const data = await this.getData(pathFile);
        const filterData = data.filter(data=>data.id !== parseInt(req.params.id));
        if(!filterData){
            console.log({message: "Error with the method deleteData"});
            return;
        }
        await Util.writeFileFs(pathFile,filterData);
    }

}