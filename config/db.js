const db = require("mongoose")

const connectdb=async()=>{
    try{
    await db.connect('mongodb://127.0.0.1:27017/flames')
    console.log("Database connected successfully")
    }catch(err){
        console.error(err.message)
    }
}
module.exports=connectdb;