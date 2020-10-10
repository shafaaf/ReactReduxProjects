import {FETCH_PRODUCTS, FILTER_PRODUCTS_BY_SIZE, SORT_PRODUCTS_BY_PRICE} from "../types";

export const fetchProducts = async (dispatch) => {
    console.log("fetchProducts called");
    const res = await fetch("http://localhost:5000/api/products");
    const data = await res.json();
    console.log("fetchProducts: data is: ", data);
    dispatch({
        type: FETCH_PRODUCTS,
        payload: data
    });
}

export const filterProductsBySize =  (products, size) => (dispatch) => {
    console.log("filterProductsBySize called");
    dispatch({
        type: FILTER_PRODUCTS_BY_SIZE,
        payload: {
            size: size,
            items: size === "" ?
                products: products.filter(product => products.availableSizes.indexOf(size) >= 0)
        }
    });
}

export const sortProductsByPrice =  (products, sort) => (dispatch) => {
    console.log("sortProductsByPrice called");
    console.log("products is: ", products);
    console.log("sort is: ", sort);

    const sortedProducts = products.slice();
    sortedProducts.sort((a, b) => {
        if (sort  === "lowest") {
            return a.price < b.price? -1:1;
        } else if (sort  === "highest") {
            return a.price < b.price? 1:-1;
        } else if (sort  === "latest") {
            return a._id < b._id? -1:1;
        } else {
            console.error("Error in sortProducts");
            return 0;
        }
    });
    dispatch({
        type: SORT_PRODUCTS_BY_PRICE,
        payload: {
            sort: sort,
            items: sortedProducts
        }
    });
}
