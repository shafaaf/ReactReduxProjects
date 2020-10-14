import { CREATE_ORDER, CLEAR_ORDER, FETCH_ORDERS } from "../types";

const orderReducer = (state = {}, action) => {
    console.log("orderReducer: state is: ", state);
    console.log("orderReducer: action is: ", action);
    switch (action.type) {
        case CREATE_ORDER:
            return Object.assign({}, action.payload);
        case CLEAR_ORDER:
            return {};
        case FETCH_ORDERS:
            return Object.assign({}, action.payload);
        default:
            return state;
    }
};
export { orderReducer };
