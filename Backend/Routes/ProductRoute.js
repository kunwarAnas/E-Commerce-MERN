import express from 'express';
import { getAllProduct  , productById } from '../Controller/productController.js';

const productRoute = express.Router();

productRoute.get('/all',getAllProduct)

productRoute.get('/:id',productById)

export default productRoute;