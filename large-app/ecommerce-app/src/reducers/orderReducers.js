import { CREATE_ORDER, CLEAR_ORDER, FETCH_ORDERS } from "../types";

const orderReducer = (state = {}, action) => {
    console.log("orderReducer: state is: ", state);
    console.log("orderReducer: action is: ", action);
    switch (action.type) {
        case CREATE_ORDER:
            return Object.assign({}, state, {currentOrder: action.payload});
        case CLEAR_ORDER:
            return Object.assign({}, state, { currentOrder: {}});
        case FETCH_ORDERS:
            return Object.assign({}, state, { allOrders: action.payload});
        default:
            return state;
    }
};
export { orderReducer };
