export const errorHandler = (error,req,res) =>{
    if(error){
        console.log({message: "Error with errorHandler", error: error});
        return;
    }
}