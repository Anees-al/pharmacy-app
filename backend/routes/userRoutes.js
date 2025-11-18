import express from 'express'
import { createUser, getAllUsers, login } from "../controllers/userController.js";



const router=express.Router();

router.post('/createuser',createUser);
router.post('/login',login);
router.get('/getallusers',getAllUsers);

export default router

