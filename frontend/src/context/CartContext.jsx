import {  createContext,  useState } from "react";


export const cartContext=createContext();
export const CartProvider=({children})=>{
    const [cartItem,setCartItem]=useState([]);



    //add to cart
     const addCart=(item)=>{
          setCartItem(prev=>[...prev,item])
    }


    // clear cart
    const clearCart = () => setCartItem([]);


    //update cart
    const updateQuantity = (id, qty) => {
    setCartItem(prev => prev.map(i => i.id === id ? { ...i, quantity: qty } : i));
  };



  return(
    <cartContext.Provider value={{
        cartItem,
        setCartItem,
        addCart,
        clearCart,
        updateQuantity

    }}>
         {children}
    </cartContext.Provider>
  )
}