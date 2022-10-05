import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools, createWithDevTools} from 'redux-devtools-extension';
import {productListReducer} from './Reducers/productReducer';
const reducer = combineReducers({
    productList:productListReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)))


export default store; 