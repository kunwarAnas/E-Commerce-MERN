import express from 'express'
import {login,signup,getProfile} from '../Controller/userController.js'
import productedRoute from '../Middleware/protectedRoute.js'
const userRoute = express.Router();

userRoute.post('/login',login);
userRoute.post('/signup',signup);
userRoute.get('/profile', productedRoute,getProfile)

export default userRoute;