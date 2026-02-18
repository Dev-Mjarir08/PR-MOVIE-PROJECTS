import { Router } from "express";
import adminController from "../controllers/admin.controller.js";

const router = Router();

router.get('/', adminController.adminPage);

router.get('/addMovie', adminController.addMovies);

router.get('/viewMovie', adminController.viewMovies);

export default router;
