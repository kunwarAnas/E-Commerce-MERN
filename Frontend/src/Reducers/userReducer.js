import * as STRING from '../Constants/userConstant';

export const userLoginReducer = (state={},action)=>{
    switch (action.type){
        case STRING.USER_LOGIN_REQUEST:
            return {loading:true};
        case STRING.USER_LOGIN_SUCCESS:
            return {loading:false, userInfo:action.payload};
        case STRING.USER_LOGIN_FAIL:
            return {loading:false, error:action.payload};
        case STRING.USER_LOGOUT:
            return {}
        default:
            return state;
    }
}
