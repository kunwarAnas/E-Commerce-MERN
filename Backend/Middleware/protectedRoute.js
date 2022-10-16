import jwt from 'jsonwebtoken';
import userModel from '../Model/userModel.js';


const productedRoute = (req,res,next)=>{
    let token = req.headers.authorization.split(' ')[1];
    if(token && req.headers.authorization.startsWith('Bearer')){
        try{
            const decoded = jwt.verify(token,process.env.SECRET);
            console.log(decoded);
            if(decoded){
               const user = userModel.findById(decoded.id).select('-password');
               req.user = user;
               res.json(user)
               next();
            }
        }catch(err){
            throw new Error('Invalid Token')
        }
    }else{
        res.status(401)
        throw new Error('No Token found/failed')
    }
}

export default productedRoute;