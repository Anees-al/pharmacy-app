import React, { useContext, useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import axios from 'axios';
import { cartContext} from '../context/CartContext';


const ProductPage = ({product}) => {
  const  {addCart}=useContext(cartContext)

  const [products,setProducts]=useState([]);
  useEffect(()=>{
    const fetchProducts=async()=>{
      try {
        const res=await axios.get('http://localhost:3000/api/product/getallproducts');
        setProducts(res.data.allproducts||[])
        
      } catch (error) {
        alert(error)
      }
    }
    fetchProducts()
  },[])
  

  const handleAdd = (product) => {
    // Add minimal data you need: id, name, price, quantity
    addCart({ id: product._id, name: product.productName, price: product.price, quantity: 1,brand:product.brand });
    
  };

  return (
    <div>
        <Nav/>
<div className='flex flex-row'>
        <div className='flex flex-col w-1/6 p-6 h-screen border-r-2'>
        <h1 className='text-2xl font-semibold mb-6'>Filters</h1>

        <div className='flex flex-col'>
            <h1 className='text-xl font-semibold mb-2'>Category</h1>
            <label><input type="checkbox" className="mr-2 cursor-pointer"/>Vitamins</label>
            <label><input type="checkbox" className="mr-2"/>Diabetes Care</label>
            <label><input type="checkbox" className="mr-2"/>Women’s Health</label>
            <label><input type="checkbox" className="mr-2"/>Baby Care</label>
            <label><input type="checkbox" className="mr-2"/>Skin & Hair</label>
        </div>


        <div className='flex flex-col mt-2'>
            <h1 className='text-xl font-semibold mb-2'>Brand</h1>
            <label><input type="checkbox" className="mr-2 cursor-pointer"/>Himalaya</label>
            <label><input type="checkbox" className="mr-2"/>Dabur</label>
            <label><input type="checkbox" className="mr-2"/>MuscleBlaze</label>
            <label><input type="checkbox" className="mr-2"/>HealthKart</label>
            <label><input type="checkbox" className="mr-2"/>Derma Co</label>
        </div>
        <div className='flex flex-col mt-6'>
            <h1 className='text-xl font-semibold mb-3'>Sort by</h1>
            <label><input type="checkbox" className="mr-2 cursor-pointer"/>Low to High</label>
            <label><input type="checkbox" className="mr-2"/>High to Low</label>
            <label><input type="checkbox" className="mr-2"/>New Arriving</label>
            <label><input type="checkbox" className="mr-2"/>Best Seller</label>
            <label><input type="checkbox" className="mr-2"/>Medicore choice</label>
        </div>
        </div>

        <div className='grid grid-cols-3 gap-5 mt-10'>
           {products.map((product,index)=>(
            <div key={index} className='flex flex-col border p-2 border-gray-500 ml-10 h-[300px] w-[300px] rounded-lg'>
               <img src="" alt=""  className='border p-3 border-gray-100 '/>

               <p className='ml-10 text-lg font-semibold'>Product: <span className='text-md font-normal'>{product.productName}</span></p>
                <p className='ml-10 text-lg font-semibold'>Description: <span className='text-sm font-normal'>{product.productDescription}</span></p>
                 <p className='ml-10 text-lg font-semibold'>Price: <span className='text-md font-normal'>{product.price}</span></p>
                  <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white mt-1 cursor-pointer font-semibold rounded-lg shadow-md hover:from-blue-600 hover:to-blue-800 hover:shadow-lg transition-all duration-300">
            Buy Now
          </button>
          <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-purple-700 text-white mt-2 cursor-pointer font-semibold rounded-lg shadow-md hover:from-purple-600 hover:to-purple-800 hover:shadow-lg transition-all duration-300" onClick={()=>handleAdd(product)}>
  Add to Cart
</button>
          
            </div>
           ))}
        </div>
        </div>
        <Footer/>
      
    </div>
  )
}

export default ProductPage
