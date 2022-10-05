import * as STRING from '../Constants/productConstant'

export const productListReducer = (state={product:[]},action)=>{
    switch (action.type){
        case STRING.PRODUCT_LIST_REQUEST:
            return {loading:true, products:[]};
        case STRING.PRODUCT_LIST_SUCCESS:
            return {loading:false, products:action.payload};
        case STRING.PRODUCT_LIST_FAIL:
            return {loading:false, error:action.payload};
        default:
            return state;
    }
}