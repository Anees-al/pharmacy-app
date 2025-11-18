import productModel from "../models/productModel.js";

export const addStock=async(req,res)=>{
       try {
        const {productName, productDescription,productCode,price,category,brand}=req.body;
        if(!productName||!productDescription||!price||!category||!brand){
            res.status(400).json({message:'please fill all the field'})
        }


        const existingProduct=await productModel.findOne({productCode});
        if(existingProduct){
            return res.status(400).json({message:'product already in the stock'})
        }



        const newProduct=new productModel({
            productName,
            productDescription,
            productCode,
            price,
            category,
            brand
        });


        await newProduct.save()
        res.status(200).json({message:'product succesfully created'})
       } catch (error) {
        res.status(400).json({message:error.message})
       }
}




export const getAllProduct=async(req,res)=>{
    try {
        const allproducts=await productModel.find();
        res.status(200).json({message:'succefully get all products',allproducts})
    } catch (error) {
       res.status(400).json({message:error.message})  
    }
}

export const getProductByCategory=async(req,res)=>{

    try {
        const {category}=req.params
        const product=await productModel.find({category});
        res.status(200).json({message:'succefully get the products',product})
    } catch (error) {
        res.status(400).json({message:error.message})  
    }
}