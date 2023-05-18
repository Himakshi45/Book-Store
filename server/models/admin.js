import mongoose from "mongoose";
const adminModel = new mongoose.Schema({ 
    name:{type:String},
    email:{type:String},
    password:{type:String}
})
const adminSchema =mongoose.model("Admin", adminModel)
export default adminSchema;