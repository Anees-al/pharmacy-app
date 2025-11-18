import express from 'express'
import { addStock, getAllProduct, getProductByCategory } from '../controllers/productControllers.js';

const router=express.Router();
router.post('/createstock',addStock)
router.get('/getallproducts',getAllProduct);
router.get('/getproductbycategory/:category',getProductByCategory)
export default router