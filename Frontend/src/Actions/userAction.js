import axios from 'axios'
import * as STRING from '../Constants/userConstant'

export const login = (email,password) => async (dispatch) =>{
    try{
        dispatch({
            type: STRING.USER_LOGIN_REQUEST
        })
        
        const config = {
            headers:{
                'Content-Type':'application/json',
            },
        }
        const {data} = await axios.post("user/login",{email,password},config)
        dispatch({
            type:STRING.USER_LOGIN_SUCCESS,
            payload:data
        })
        localStorage.setItem('userInfo',JSON.stringify(data));
    }catch(error){
        dispatch({
            type : STRING.USER_LOGIN_FAIL,
            payload : error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const logout = ()=> async (dispatch) =>{
    dispatch({type: STRING.USER_LOGOUT});
    localStorage.removeItem('userInfo');
}

export const register = (name, email,password) => async (dispatch) =>{
    try{
        dispatch({
            type: STRING.USER_REGISTER_REQUEST
        })
        
        const config = {
            headers:{
                'Content-Type':'application/json',
            },
        }
        const {data} = await axios.post("user/signup",{name,email,password},config)
        dispatch({
            type:STRING.USER_REGISTER_SUCCESS,
            payload:data
        })
        localStorage.setItem('userInfo',JSON.stringify(data));
    }catch(error){
        dispatch({
            type : STRING.USER_REGISTER_FAIL,
            payload : error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}