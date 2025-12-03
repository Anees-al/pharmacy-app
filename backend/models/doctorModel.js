import mongoose from 'mongoose';

const doctoSchema=new mongoose.Schema({
    doctorname:{type:String,required:true},
    doctorcode:{type:String,required:true,unique:true},
    branch:{type:String},
    qualification:{type:Array},
    specialization: { type: String, required: true },
    experience: { type: Number } ,
    fee: { type: Number, required: true },
    clinic: { type: String },
    location: { type: String } 
},{timestamps:true})




const doctorModel=new mongoose.model('doctor',doctoSchema);
export default doctorModel;