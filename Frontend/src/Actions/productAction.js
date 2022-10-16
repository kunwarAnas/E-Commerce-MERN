import axios from 'axios';
import * as STRING from '../Constants/productConstant';


export const listProducts = () => async(dispatch) => {
    try{
        dispatch({type : STRING.PRODUCT_LIST_REQUEST});
        const {data} = await axios.get('/product/all');
        dispatch({type : STRING.PRODUCT_LIST_SUCCESS , payload:data});
    }catch(error){
        dispatch({
            type : STRING.PRODUCT_LIST_FAIL,
            payload : error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}


export const listProductsDetails = (id) => async(dispatch) => {
    try{
        dispatch({type : STRING.PRODUCT_DETAIL_REQUEST});
        const {data} = await axios.get(`/product/${id}`);
        dispatch({type : STRING.PRODUCT_DETAIL_SUCCESS , payload:data});
    }catch(error){
        dispatch({
            type : STRING.PRODUCT_DETAIL_FAIL,
            payload : error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}
