import instance from "../../Api/api";
import {FETCH_ERROR, FETCH_SUCCESS, START_FETCHING, STOP_FETCHING} from "./actionsTypes";


export function fetchRates(curId , startDate, endDate) {
    return async dispatch => {
        dispatch(startFetching());
        try {
            const response = await instance.get(`${curId}?startDate=${startDate}&endDate=${endDate}`);
            const rates = response.data;
            dispatch(stopFetching());
            dispatch(ratesSuccess(rates))
        } catch (error) {
            dispatch(ratesError(error))
        }
    }
}


export function startFetching() {
    return {
        type: START_FETCHING
    }
}

export function stopFetching() {
    return {
        type: STOP_FETCHING
    }
}

export function ratesSuccess(rates) {
    return {
        type: FETCH_SUCCESS,
        payload: rates
    }
}

export function ratesError(error) {
    return {
        type: FETCH_ERROR,
        payload: error
    }
}





