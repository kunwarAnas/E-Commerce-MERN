import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools, createWithDevTools} from 'redux-devtools-extension';
import {productListReducer, productDetailReducer} from './Reducers/productReducer';
import { cartReducer } from './Reducers/CartReducer';
import { json } from 'react-router-dom';

const reducer = combineReducers({
    productList:productListReducer,
    productDetail:productDetailReducer,
    cart:cartReducer,
});

const cartItemsFromStorage = localStorage.getItem('cartItems') 
? JSON.parse(localStorage.getItem('cartItems')) : [];

//console.log(cartItemsFromStorage);

const initialState = {
    cart:{cartItems:cartItemsFromStorage}
};

const middleware = [thunk];

const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))


export default store; 