import express from 'express';
import asyncHandler from 'express-async-handler';
import productModel from '../Model/productModel.js';
const productRoute = express.Router();

productRoute.get('/all',asyncHandler( async (req,res)=>{
    const allProduct = await productModel.find({});
    res.json({
        allProduct
    })
}))

productRoute.get('/:id', asyncHandler(async (req,res)=>{
    const id = req.params.id;
    if(id){
        const product = await productModel.findById(id);
        if(product){
            res.json({product});
        }else{
            res.json({message:'no product match'});
        }
    }else{
        res.json({message:"Something went wrong"});
    }
}))

export default productRoute;