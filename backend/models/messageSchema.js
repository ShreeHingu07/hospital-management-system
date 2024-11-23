import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required : true,
        minLength:[3,'first Name Must Contain at least 3 Characters!']
    },
    lastName:{
        type:String,
        required : true,
        minLength:[3,'first Name Must Contain at least 3 Characters!']
    },
    email:{
        type:String,
        required:true,
        validate: [validator.isEmail,"Provide A Valid Email!"]
    },
    phone:{
        type:String,
        required : true,
        minLength:[10,'phone number Must Contain Exact 10 digits!'],
        maxLength:[10,'phone number Must Contain Exact 10 digits!']
    },
    message:{
        type:String,
        required : true,
        minLength:[10,'Message Contain at least 10 Characters!']
    },
});

export const Message = mongoose.model('Message',messageSchema);