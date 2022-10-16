import asyncHandler from 'express-async-handler';
import productModel from '../Model/productModel.js';


const getAllProduct = asyncHandler( async (req,res)=>{
    const allProduct = await productModel.find({});
    res.send(
        allProduct
    )
})

const productById = asyncHandler(async (req,res)=>{
    const id = req.params.id;
    if(id){
        const product = await productModel.findById(id);
        if(product){
            res.json(product);
        }else{
            res.json({message:'no product match'});
        }
    }else{
        res.json({message:"Something went wrong"});
    }
})

export {
    getAllProduct,
    productById
}