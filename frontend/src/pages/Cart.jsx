import React, { useContext } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { cartContext } from '../context/CartContext'

const Cart = () => {
    const {cartItem}=useContext(cartContext);

  return (
    <div className='flex flex-col'>
        <Nav/>


        <div className='flex flex-col  p-10'>
       <h1 className='text-4xl font-semibold text-gray-700 text-center'>Your Cart</h1>
        <div className='flex flex-row justify-between px-6 py-4 border-b border-gray-600 font-semibold text-gray-700'>
    <p>Name</p>
    <p>Brandname</p>
    <p>Number</p>
    <p>Price</p>
  </div>
       <div className='flex flex-col'>
          {cartItem.length === 0 && (
            <p className='text-center mt-10 text-gray-500 text-lg'>
              Your cart is empty
            </p>
          )}

          {cartItem.map((order) => (
            <div
              className='flex flex-row justify-between p-6 border-b border-gray-400'
              key={order.id}
            >
              <p>{order.name}</p>
              <p>delizole</p>
              <input type="number" defaultValue={order.quantity} className='w-10' />
              <p>{order.price}</p>
            </div>
          ))}
         <div className='flex flex-col items-end p-5 mt-56'>
         <div className='flex flex-row gap-15'>
            <p>Total price</p>
            <p>700</p>
         </div>
         <div className='flex flex-row gap-15'>
            <p>Total tax</p>
            <p>40</p>
         </div>
         <div className='flex flex-row gap-15'>
            <p>Grand total</p>
            <p>740</p>
         </div>

         <button className='bg-black text-white font-semibold py-2 px-7 rounded-lg mt-5 cursor-pointer shadow-md hover:shadow-gray-500'>Proceed to pay</button>
         </div>


       </div>
        </div>
      

      <Footer/>
    </div>
  )
}

export default Cart
