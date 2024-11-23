import mongoose from "mongoose";

export const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URL).then(()=>{
        console.log("db connected success")
    }).catch((err)=>{
        console.log(`Some error occur to connect db ${err}`)
    });
};