import productModel from "../models/productModel.js";
import { instance } from "../server.js";


export const addStock=async(req,res)=>{
       try {
        const {name:productName, description:productDescription,code:productCode,price,category,brand}=req.body;
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



export const proccesspayment=async(req,res)=>{
    try {
        const option={
            amount:Number(req.body.amount*100),
            currency:'INR',
        }

        const order=await instance.orders.create(option);
        return res.status(200).json({message:"success",order})
    } catch (error) {
        return res.status(400).json(error)
    }
}


export const getKey=async(req,res)=>{
    
        return res.status(200).json({
           key:process.env.RAZORPAY_API_KEY,
           
        })

        

}


export const verificattionPayment=async(req,res)=>{
    res.status(200).json({success:true})
}