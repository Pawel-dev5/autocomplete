import types from "./types";

const INITIAL_STATE = {};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.ADD_USER:
            state = { ...state, list: action.item }
        default:
            return state
    }
};
export default userReducer;