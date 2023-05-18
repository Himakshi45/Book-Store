import mongoose from "mongoose";
const bookModel = new mongoose.Schema({ 
    title:{type:String},
    author:{type:String},
    price:{type:Number},
    image:{type:String},
})
const bookSchema =mongoose.model("Book", bookModel)
export default bookSchema;