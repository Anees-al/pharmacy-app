import React from 'react'
import Home from './pages/Home'
import Footer from './components/Footer'
import {Route ,Routes} from 'react-router-dom'
import Login from './pages/Login'
import ProductPage from './pages/ProductPage'
import { ToastContainer, toast } from 'react-toastify';
import Admin from './pages/Admin'
import Userpage from './pages/Userpage'
import Stockpage from './pages/Stockpage'
import AddStocks from './pages/AddStocks'

import HealthInsurance from './pages/HealthInsurance'
import Labtest from './pages/Labtest'
import Cart from './pages/Cart'
import Doctor from './pages/Doctor'




const App = () => {
  return (
    <div>
      <ToastContainer/>
  <Routes>
    
 <Route path='/'  element={<Home/>}/>
 <Route path='/login' element={<Login/>}/>
 <Route path='/product' element={<ProductPage/>}/>
 <Route path='/admin' element={<Admin/>}/>
 <Route path='/users'  element={<Userpage/>}/>
 <Route path='/stocks' element={<Stockpage/>}/>
 <Route path='/addstock' element={<AddStocks/>}/>
 <Route path='/insurance'  element={<HealthInsurance/>}/>
 <Route path='/labtests'  element={<Labtest/>}/>
 <Route path='/cart'  element={<Cart/>}/>
 <Route path='/doctor'  element={<Doctor/>}/>
 
  </Routes>
  
     
      
      

      
    </div>
  )
}

export default App
