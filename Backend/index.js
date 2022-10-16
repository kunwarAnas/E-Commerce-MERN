import express from 'express';
import cookieParser from 'cookie-parser'
import * as dotenv from 'dotenv'
dotenv.config({path:'../.env'});
import connectDB from './config/DB.js';
import userRoute from './Routes/userRouter.js';
import productRoute from './Routes/ProductRoute.js';
import {notFound , errorHandler} from './Middleware/errorHandler.js';

await connectDB();

const PORT = process.env.PORT || 5000;

const app = express();



app.use(express.json());
app.use(cookieParser());

app.use('/product',productRoute);
app.use('/user',userRoute);

app.use(notFound);

app.use(errorHandler);

app.listen(PORT,()=>{
    console.log(`server is runnning in ${process.env.NODE_ENV} mode at port ${PORT}`);
})
.on("error", function (err) {
    process.once("SIGUSR2", function () {
      process.kill(process.pid, "SIGUSR2");
    });
    process.on("SIGINT", function () {
      // this is only called on ctrl+c, not restart
      process.kill(process.pid, "SIGINT");
    });
  }); 
