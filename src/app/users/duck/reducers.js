import types from "./types";

const INITIAL_STATE = {
    list: []
};

// const userReducer = (state = INITIAL_STATE, action) => {
//     switch (action.type) {
//         default:
//             return state
//     }
// };
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.ADD_USER:
            return {
                ...state, list: [...state.list, action.item]
            }
        case types.Re:
            return {
                ...state, list: []
            }
        default:
            return state
    }
};
export default userReducer;