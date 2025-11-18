
import userModel from "../models/usersModel.js";
import bcrypt  from 'bcrypt'
import jwt from 'jsonwebtoken'


export const createUser=async(req,res)=>{
    try {
        const {username,email,password}=req.body;
        if(!username||!email||!password){
            return res.status(400).json({message:'fill all the fields'});
        };
        


 const existUsername=await userModel.findOne({username});
 
    if(existUsername){
        return res.status(400).json({message:'User already exists '})
    }       


const existEmail=await userModel.findOne({email});
    if(existEmail){
        return res.status(400).json({message:'User already exists '})
    }
  const passwordRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


  if(!passwordRegex.test(password)){
   return  res.status(400).json({message:'Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.'})
  }

    const hashpassword=await bcrypt.hash(password,10);
    console.log(hashpassword,email,username);
    const user=new userModel({username,email,password:hashpassword});
    console.log("User before save:", user);
    await user.save()
    console.log("User after save:", user);
    
    const token = jwt.sign(
      { id:user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );


    return res.status(200).json({message:'created successfully',token,user})



    } catch (error) {
         console.error("Error saving user:", error); 
        return res.status(400).json({message:error.message})
       
    }
}



export const login=async(req,res)=>{
    try {
        const {email,password}=req.body;
        if(!email||!password){
            res.status(400).json({message:'please fill all the fields'});
        }


        const existingUser=await userModel.findOne({email})
        if(!existingUser){
            res.status(400).json({message:'User not found'});
        }


        const comparePassword=await bcrypt.compare(password,existingUser.password);
        if(!comparePassword){
            res.status(400).json({message:'invalid password'});
        }

         const token = jwt.sign(
      { id: existingUser._id, role: existingUser.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.cookie('token',token,{
      httpOnly:true,
      secure:process.env.NODE_ENV === 'production',
      sameSite:process.env.NODE_ENV === 'production' ? 'none':'strict',
      maxAge:7*24*60*60*100
    })



   return res.status(200).json({message:'successfully logined',existingUser})





    } catch (error) {
    return res.status(400).status(error.message.data)   
    }
}



export const getAllUsers=async(req,res)=>{
    try {
        const users=await userModel.find({});
        return res.status(200).json({message:'successfully get the the users',users})
    } catch (error) {
        return res.status(200).json(message.error);
    }
}


