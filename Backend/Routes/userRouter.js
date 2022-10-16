import express from 'express'
import {login,signup} from '../Controller/userController.js'
import productedRoute from '../Middleware/protectedRoute.js'
 const userRoute = express.Router();

userRoute.post('/login',login);
userRoute.post('/singup',signup);
userRoute.get('/profile', productedRoute)

export default userRoute;