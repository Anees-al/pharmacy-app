import express from 'express'
import { createDoctor, getAllDoctors, getDoctorBYBranch } from '../controllers/doctorController.js';

const router=express.Router();

router.post('/createdoctor',createDoctor);
router.get('/alldoctors',getAllDoctors);
router.get('/getdoctorbybranch/:branch',getDoctorBYBranch)

export default router