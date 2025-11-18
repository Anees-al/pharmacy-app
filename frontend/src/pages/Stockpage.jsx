import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Stockpage = () => {
    const [products,setProducts]=useState([]);

    useEffect(()=>{
        const fetchdata=async()=>{
            try {
                const res =await axios.get('http://localhost:3000/api/product/getallproducts');
                setProducts(res.data.allproducts)
            } catch (error) {
                alert(error)
            }
        }
        fetchdata();
    },[])
  return (
    <div>
      {products.length}
    </div>
  )
}

export default Stockpage
