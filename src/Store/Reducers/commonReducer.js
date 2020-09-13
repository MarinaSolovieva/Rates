import {FETCH_ERROR, FETCH_SUCCESS, START_FETCHING, STOP_FETCHING} from "../Actions/actionsTypes";

const initialState = {
    isLoading: false,
    error: null,
    rates: [],
};

export default function commonReducer(state = initialState, {type, payload} ) {
    switch (type) {
        case START_FETCHING: {
            return {
                ...state,
                isLoading: true
            }
        }
        case STOP_FETCHING: {
            return {
                ...state,
                isLoading: false
            }
        }
        case  FETCH_ERROR:
            return{
                ...state,
                isLoading: false,
                error: payload
            }
        case  FETCH_SUCCESS:
            return{
                ...state,
                rates: payload
            }
        default:
            return state
    }
}

