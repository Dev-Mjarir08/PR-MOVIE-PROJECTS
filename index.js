import express from 'express';
import dotenv from "dotenv";
dotenv.config(); 

import DB from "./configs/db.js";
import morgan from 'morgan';
import router from './routers/index.js';
import movierouter from './routers/movie.route.js';

const app = express();
DB();
const PORT = process.env.PORT || 8081;

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use('/uploads', express.static('uploads'));

app.use(express.urlencoded({ extended: true }));

app.use(morgan('dev'));

app.use('/', router);   
app.use('/admin', movierouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});
