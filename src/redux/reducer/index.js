import {
    REQUEST_FOR_SAVE_USER_DATA,
    SAVE_USER_DATA_SUCCESS_REQUEST,
    SAVE_USER_DATA_FAILURE_REQUEST
} from '../actionType/index'
const initialValues = {
    data: {},
    questions: {}
}
export default function Reducer(state = { initialValues }, action) {
    switch (action.type) {
        case REQUEST_FOR_SAVE_USER_DATA:
            return {
                ...state,
                data: action.data
            }
        case SAVE_USER_DATA_FAILURE_REQUEST:
            return {
                ...state
            }
        case SAVE_USER_DATA_SUCCESS_REQUEST:
            return {
                ...state
            }

        default:
            break;
    }

}