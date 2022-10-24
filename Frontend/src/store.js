import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools, createWithDevTools} from 'redux-devtools-extension';
import {productListReducer, productDetailReducer} from './Reducers/productReducer';
import { cartReducer } from './Reducers/CartReducer';
import { userLoginReducer } from './Reducers/userReducer';

const reducer = combineReducers({
    productList:productListReducer,
    productDetail:productDetailReducer,
    cart:cartReducer,
    userLogin:userLoginReducer
});

const cartItemsFromStorage = localStorage.getItem('cartItems') 
? JSON.parse(localStorage.getItem('cartItems')) : [];


const userInfoFromStorage = localStorage.getItem('userInfo') 
? JSON.parse(localStorage.getItem('userInfo')) : null;

//console.log(cartItemsFromStorage);

const initialState = {
    cart:{cartItems:cartItemsFromStorage},
    userLogin :{userInfo: userInfoFromStorage}
};

const middleware = [thunk];

const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))


export default store; 