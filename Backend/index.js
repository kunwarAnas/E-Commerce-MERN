const express = require('express');
const productRoute = require('./Routes/ProductRoute');

const app = express();

app.use(express.json());

app.listen(5000,()=>{
    console.log('server is runnning at port 5000');
})

app.use('/product',productRoute);

