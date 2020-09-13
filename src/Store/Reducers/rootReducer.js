import {combineReducers} from "redux";

import commonReducer from "../Reducers/commonReducer"


export default combineReducers({
    common: commonReducer,
})