import mongoose from 'mongoose'

const productSchema=new mongoose.Schema({
    productName:{type:String,required:true,trim:true},
    productDescription:{type:String,required:true,trim:true},
    productCode:{type:String,required:true,unique:true},
    price:{type:Number,required:true,min:0},
    category:{type:String,required:true},
    brand:{type:String}

},{timestamps:true});

const productModel=new mongoose.model('product',productSchema);
export default productModel;