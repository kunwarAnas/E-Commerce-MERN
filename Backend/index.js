import express from 'express';
import * as dotenv from 'dotenv'
dotenv.config({path:'../.env'});
import connectDB from './config/DB.js';
import productRoute from './Routes/ProductRoute.js';
import {notFound , errorHandler} from './Middleware/errorHandler.js';

await connectDB();

const PORT = process.env.PORT || 5000;

const app = express();



app.use(express.json());

app.use('/product',productRoute);

app.use(notFound);

app.use(errorHandler);

app.listen(PORT,()=>{
    console.log(`server is runnning in ${process.env.NODE_ENV} mode at port ${PORT}`);
})