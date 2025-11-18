import React, { useState } from 'react'
import login from '../assets/login.jpg'
import logo from '../assets/logo.png'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import {  toast } from 'react-toastify';

const Login = () => {
  const [state,setstate]=useState('login');
  const [formdata,setformdata]=useState({
    username:"",
    email:"",
    password:""
  })
  const navigate=useNavigate()


  const handleInputChange=(e)=>{
    setformdata({...formdata,[e.target.name]:e.target.value})
  }



  const handleSubmit=async(e)=>{
       e.preventDefault();

       

       try {
        let url= state==='login'?"http://localhost:3000/api/user/login":"http://localhost:3000/api/user/createuser"

        const res=await axios.post(url,formdata);
        console.log(res.data)
        setformdata({
      username: "",
      email: "",
      password: ""
    });

    navigate('/')
    {state==='login'?toast.success('loggin succesfullt',{
  position: "top-right",
  
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme:"colored",
  style:{
    
    background: "#0077B6", // blue background
    color: "#ffffff",       // white text
    fontWeight: "bold",
    fontSize: "16px",
    borderRadius: "8px",
    padding: "12px"
  
  }
   // "colored" applies default color styles
}):toast.success('user created',{
  position: "top-right",
  
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme:"colored",
  style:{
    
    background: "#0077B6", // blue background
    color: "#ffffff",       // white text
    fontWeight: "bold",
    fontSize: "16px",
    borderRadius: "8px",
    padding: "12px"
  
  }})}
        
       } catch (error) {
        alert(error.response?.data?.message || "Something went wrong")
       }
  }


  const handlechange=()=>{
    if(state==='login'){
      setstate('signup')
    }else{
      setstate('login')
    }
  }


  
  return (
    <div className='flex h-screen'>
        <div className='flex flex-col w-1/2 bg-white p-10'>
           <img src={logo} alt=""  className='w-22'/>

           <div className='flex flex-col mt-20 ml-10 '>
         <h1 className='text-3xl font-black'>{state==='login'?'Welcome Back':'welcome'}</h1>
         <p className=' text-gray-500 font-bold mt-4'>Please enter your details</p>

         <form onSubmit={handleSubmit}>
            {state==='login'?( <><div className='mt-5 '>
           <p className='text-sm font-semibold mb-2'>Email Address</p>
            <input type="email" className='p-1 border border-gray-200 rounded-md w-[400px] hover:border-[#0077B6]' placeholder='email address' name="email" value={formdata.email} onChange={handleInputChange}/>
            </div>

             <div className='mt-5 '>
           <p className='text-sm font-semibold mb-2'>Password</p>
            <input type="password" className='p-1 border border-gray-200 rounded-md w-[400px] hover:border-[#0077B6]' placeholder='password' name='password' value={formdata.password} onChange={handleInputChange}/>
            </div>
            <button className='py-2 px-1 text-white bg-[#0077B6] rounded-lg mt-10 w-[400px] text-center font-semibold cursor-pointer'>Submit</button></>)
           :( <>
           <div className='mt-5 '>
            

           <p className='text-sm font-semibold mb-2'>User Name</p>
            <input type="text" className='p-1 border border-gray-200 rounded-md w-[400px] hover:border-[#0077B6]' placeholder='user name' name='username' value={formdata.username} onChange={handleInputChange} />
            </div>
           <div className='mt-5 '>
            

           <p className='text-sm font-semibold mb-2' >Email Address</p>
            <input type="email" className='p-1 border border-gray-200 rounded-md w-[400px] hover:border-[#0077B6]' placeholder='email address' name="email" value={formdata.email} onChange={handleInputChange} />
            </div>

             <div className='mt-5 '>
           <p className='text-sm font-semibold mb-2'>Password</p>
            <input type="password" className='p-1 border border-gray-200 rounded-md w-[400px] hover:border-[#0077B6]' placeholder='password' name='password'  value={formdata.password} onChange={handleInputChange}/>
            <p className='text-xs mt-2 p-1 rounded-lg border border-gray-400 font-semibold w-[350px]'>password contain atleast 8 characters, one lowercase,uppercase,number and special character</p>
            </div>
            <button className='py-2 px-1 text-white bg-[#0077B6] rounded-lg mt-10 w-[400px] text-center font-semibold cursor-pointer'>Submit</button></>)}
         </form>
         <p className='text-sm font-light mt-5 items-center'>{state==='login'?'do you have no account':'Already sign up'} <button className='p-2 font-semibold text-blue-500 cursor-pointer' onClick={()=>handlechange()}>{state==='login'?'Sign up':'Login'}</button></p>
           </div>

        </div>
        <div className='w-1/2 bg-white flex justify-center items-center'>
        <img src={login} alt="" />
        </div>
      
    </div>
  )
}

export default Login
