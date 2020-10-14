import {createStore, applyMiddleware, compose, combineReducers} from "redux";
import thunk from "redux-thunk";

import {productsReducer} from "./reducers/productReducers";
import {cartReducer} from "./reducers/cartReducer";
import { orderReducer } from "./reducers/orderReducers";

const initialState = {
    cart: {
        cartItems: JSON.parse(localStorage.getItem("cartItems")) || []
    },
    products: {
        items: [],
        filteredItems: [],
        size: "",
        sort: ""
    },
    order: {} // populated only to show order modal, and cleared when closing modal
};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combineReducers({
        products : productsReducer,
        cart: cartReducer,
        order: orderReducer,
    }),
    initialState,
    composeEnhancer(applyMiddleware(thunk))
);

export default store;
