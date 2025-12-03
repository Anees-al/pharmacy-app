import express from 'express';
import doctorModel from '../models/doctorModel.js';

export const createDoctor=async(req,res)=>{
   try {
    const {doctorname,doctorcode,branch,qualification,specialization,experience,fee,clinic,location}=req.body;
    if(!doctorname||!doctorcode||!branch||!qualification||!specialization||!experience||!fee||!clinic||!location){
        return res.status(400).json({message:'please fill all fields'})
    }

    const existingUser=await doctorModel.findOne({doctorcode})
    if(existingUser){
        return res.status(400).json({message:'doctor already in the db'})
    }


    
            const newDoctor=new doctorModel({
                doctorname,
                doctorcode,
                branch,
                qualification,
                specialization,
                experience,
                fee,
                clinic,
                location
            });



            await newDoctor.save();
            return res.status(200).json({message:'successfully created the doctor',newDoctor})
   } catch (error) {
       return res.status(400).json({message:error.message})
   }
}



export const getAllDoctors=async(req,res)=>{
    try {
        const doctors=await doctorModel.find({});
        return res.status(200).json({message:'get all doctors',doctors})
    } catch (error) {
        return res.status(400).json(error.message)
    }
}


export const getDoctorBYBranch=async(req,res)=>{
    try {
        const {branch}=req.params;
        const doctors=await doctorModel.find({branch});
        return res.status(200).json({message:'succefuuly get the doctors',doctors})
    } catch (error) {
        return res.status(400).json(error.message)
    }
}