import {FETCH_PRODUCTS} from "../types";

export const productsReducer = (state = {}, action) => {
    console.log("productsReducer: state is: ", state);
    console.log("productsReducer: action is: ", action);
    switch (action.type) {
        case FETCH_PRODUCTS:
            return  { items: action.payload }
        default:
            return state;
    }
}
