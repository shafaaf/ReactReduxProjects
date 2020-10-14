import {FETCH_PRODUCTS, FILTER_PRODUCTS_BY_SIZE, SORT_PRODUCTS_BY_PRICE} from "../types";

// State includes products object which has
// items, filteredItems, size, sort

export const productsReducer = (state = {}, action) => {
    console.log("productsReducer: state is: ", state);
    console.log("productsReducer: action is: ", action);

    switch (action.type) {
        case FETCH_PRODUCTS:
            return {
                items: action.payload,
                filteredItems: action.payload,
                size: "",
                sort: ""
            };
        case FILTER_PRODUCTS_BY_SIZE:
            return {
                ...state,
                filteredItems: action.payload.items,
                size: action.payload.size

            };
        case SORT_PRODUCTS_BY_PRICE:
            return {
                ...state,
                filteredItems: action.payload.items,
                sort: action.payload.sort,
            };
        default:
            return state;
    }
};
