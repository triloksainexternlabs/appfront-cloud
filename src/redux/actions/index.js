import {
    REQUEST_FOR_SAVE_USER_DATA,
    SAVE_USER_DATA_FAILURE_REQUEST,
    SAVE_USER_DATA_SUCCESS_REQUEST

} from '../actionType';
import API from '../apis';

export const requestForUserDetails = (data) => {
    return {
        type: REQUEST_FOR_SAVE_USER_DATA,
        data

    }
}
export const successRequestForUserDetails = (data) => {
    return {
        type: SAVE_USER_DATA_SUCCESS_REQUEST,
        data

    }
}
export const failureRequestForUserDetails = (data) => {
    return {
        type: SAVE_USER_DATA_FAILURE_REQUEST,
        data

    }
}
export function storeUserDetails(data) {
    return function (dispatch) {
        dispatch(requestForUserDetails(data))
        //  API.postUserDetails().then(response=>{

        //  })
        //  .catch((err)=>{

        //  })
    }
}