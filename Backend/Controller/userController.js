import asyncHandler from "express-async-handler";
import userModel from "../Model/userModel.js";
import jwt from 'jsonwebtoken';

const login = asyncHandler(async (req,res)=>{
    const {email , password} = req.body;
    if(email && password){
        const user = await userModel.findOne({email});
        if(user && (await user.matchPassword(password))){
            const token = jwt.sign({id:user._id},process.env.SECRET);
            //res.cookie('LoginCookie',token, { httpOnly: true });
            res.json({
               id : user._id,
               name : user.name,
               email : user.email,
               isAdmin: user.isAdmin,
               token:token
            })
        }else{
            res.status(401)
            throw new Error('inavlid credentials')
        }
    }
})

const signup = asyncHandler(async (req,res)=>{
    const {email , password} = req.body;
    res.send({email,password})
})

export {
    login,
    signup
}