import mongoose from "mongoose";

const dbConnection=()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName:"RESTAURANT"
    }).then(()=>{
        console.log("Connected To the Database Successfully!!");
    }).catch((err)=>{
        console.log(`Some Error occured while connecting to the database ${err}`)
    })
}

export default dbConnection;