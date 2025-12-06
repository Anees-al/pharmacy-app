import React, { useContext } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { cartContext } from '../context/CartContext'
import axios from 'axios'


const Cart = () => {
    const {cartItem}=useContext(cartContext);


    const handlepayment=async(amount)=>{
      try {
        const {data:keydata}=await axios.get('http://localhost:3000/api/product/getkey')
        const {data:orderData}=await axios.post('http://localhost:3000/api/product/payment',{amount})
      
      console.log(keydata)


      const {order}=orderData;
      const{key}=keydata;
      console.log(order)
       const options = {
        key, // Replace with your Razorpay key_id
        amount, // Amount is in currency subunits.
        currency: 'INR',
        
        name: 'Anees',
        description: 'Test Transaction',
        order_id: order.id, // This is the order_id created in the backend
         method: {
    upi: true
  },
        callback_url: 'http://localhost:3000/api/product/paymentverification', // Your success URL
        prefill: {
          name: 'Gaurav Kumar',
          email: 'gaurav.kumar@example.com',
          contact: '9999999999'
        },
        theme: {
          color: '#0077B6'
        },
      };

      const rzp = new Razorpay(options);
      rzp.open();
    

      } catch (error) {
        console.log(error.response.data)
      }
    }

    

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
              <p>{order.brand}</p>
              <input type="number" defaultValue={order.quantity} className='w-10' />
              <p>{order.price}</p>
            
            </div>
          ))}
         <div className='flex flex-col items-end p-5 mt-56'>
          <div className='flex flex-row gap-10'>
              <p>Total price</p>
              <p>
                {cartItem.reduce((sum, item) => sum + item.price * item.quantity, 0)}
              </p>
            </div>

            <div className='flex flex-row gap-10'>
              <p>Total tax</p>
              <p>
                {Math.floor(
                  cartItem.reduce((sum, item) => sum + item.price * item.quantity, 0) * 0.05
                )}
              </p>
            </div>
         <div className='flex flex-row gap-10'>
              <p>Grand total</p>
              <p>
                {Math.floor(
                  cartItem.reduce((sum, item) => sum + item.price * item.quantity, 0) * 1.05
                )}
              </p>
            </div>

         <button className='bg-black text-white font-semibold py-2 px-7 rounded-lg mt-5 cursor-pointer shadow-md hover:shadow-gray-500' onClick={()=>handlepayment(Math.floor( cartItem.reduce((sum, item) => sum + item.price * item.quantity, 0) * 1.05))}>Proceed to pay</button>
         </div>


       </div>
        </div>
      

      <Footer/>
    </div>
  )
}

export default Cart
