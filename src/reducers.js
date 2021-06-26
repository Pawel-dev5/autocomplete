import { combineReducers } from "redux";
import userReducer from "./app/users/duck";

const rootReducer = combineReducers({
    users: userReducer
});

export default rootReducer;