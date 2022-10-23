import asyncHandler from "express-async-handler";
import userModel from "../Model/userModel.js";
import jwt from 'jsonwebtoken';

const login = asyncHandler(async (req,res)=>{
    const {email , password} = req.body;
    if(email && password){
        const user = await userModel.findOne({email});
        //console.log(user);
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
    const {name , email , password} = req.body;
    const alreadyExist = await userModel.findOne({email});
    if(!alreadyExist){
        let user = await userModel.create({
            name,
            email,
            password
        })
        if(user){
            res.status(201);
            res.json({
                user:{email:email,message:'user created'}
            })
        }else{
            res.status(400)
            throw new Error('Invalid user data')
        }
    }else{
        res.status(400);
        throw new Error('Email already exists')
    }
    
})

const getProfile = asyncHandler(async(req,res)=>{
    const {_id} = req.user;
    const user = await userModel.findById(_id);
    if(user){
        res.json({
            id : user._id,
               name : user.name,
               email : user.email,
               isAdmin: user.isAdmin,
        })
    }else{
        res.status(404);
        throw new Error("user not found");
    }
})

export {
    login,
    signup,
    getProfile
}