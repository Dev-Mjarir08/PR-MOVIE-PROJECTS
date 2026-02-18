import { Router } from "express";
import movieController from "../controllers/movie.controller.js";
import uploadImage from "../middlewares/imageUpload.js";


const movierouter = Router();
movierouter.get('/addMovie', movieController.showAddMovie);
movierouter.post('/addMovie',uploadImage.single("image"),movieController.addMovie);
movierouter.get('/viewMovie', movieController.viewMovies);
movierouter.get('/deleteMovie/:id', movieController.deleteMovie);
movierouter.get('/editMovie/:id', movieController.showEditMovie);
movierouter.post("/editMovie/:id",uploadImage.single("image"),movieController.updateMovie);

export default movierouter;