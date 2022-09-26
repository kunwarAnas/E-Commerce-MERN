const express =require('express');
const productData = require('../Data/product');
const productRoute = express.Router();


productRoute.get('/all',(req,res)=>{
    res.json({
        productData
    })
})

productRoute.get('/:id',(req,res)=>{
    const id = req.params.id;
    if(id){
        const product = productData.find((p)=>p._id === id);
        if(product){
            res.json({product})
        }else{
            res.json({message:'no product match'})
        }
    }else{
        res.json({message:"Something went wrong"});
    }
})
module.exports=productRoute;