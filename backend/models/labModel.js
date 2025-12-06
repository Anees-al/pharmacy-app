import mongoose from 'mongoose';

const labSchema=new mongoose.Schema({
    testname:{type:String,required:true,trim:true},
    testcode:{type:String,required:true,unique:true},
    category:{type:String},
    price:{type:Number,required:true},
    clinic:{type:String,required:true},
    location:{type:String,required:true}
    
},{timestamps:true})


const labModel=new mongoose.model('lab',labSchema);

export default labModel;