import express from 'express'
import { addStock, getAllProduct, getKey, getProductByCategory, proccesspayment, verificattionPayment } from '../controllers/productControllers.js';

const router=express.Router();
router.post('/createstock',addStock)
router.get('/getallproducts',getAllProduct);
router.get('/getproductbycategory/:category',getProductByCategory);
router.post('/payment',proccesspayment);
router.get('/getkey',getKey);
router.post('/paymentverification',verificattionPayment)
export default router