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
 <Route path='/products' element={<Stockpage/>}/>
  </Routes>
  
     
      
      

      
    </div>
  )
}

export default App
