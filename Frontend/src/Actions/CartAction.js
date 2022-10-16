import axios from 'axios'
import { json } from 'react-router-dom';
import * as STRING from '../Constants/CartConstants';

export const addtocart = (id , qty) => async (dispatch , getstate) => {
   try{
    const {data} = await axios.get(`/product/${id}`);
    const obj = {
            product:data._id,
            name:data.name,
            Image:data.image,
            price:data.price,
            countInStock: data.countInStock,
            qty
    }
    dispatch({
        type: 'CART_ADD_ITEM',
        payload:obj
    })
    console.log(getstate().cart.cartItems);
    localStorage.setItem('cartItems',JSON.stringify(getstate().cart.cartItems))
   }catch(err){
    console.log(err.message);
   }
}

export const removeFromCart = (id) => (dispatch , getstate) => {
    dispatch({
        type: STRING.CART_REMOVE_ITEM,
        payload:id
    })

    localStorage.setItem('cartItems',JSON.stringify(getstate().cart.cartItems))
}