import {FETCH_PRODUCTS, FILTER_PRODUCTS_BY_SIZE, SORT_PRODUCTS_BY_PRICE} from "../types";

export const fetchProducts = async (dispatch) => {
    const res = await fetch("http://localhost:5000/api/products");
    const data = await res.json();
    dispatch({
        type: FETCH_PRODUCTS,
        payload: data
    });
};

export const filterProductsBySize =  (items, size) => (dispatch) => {
    console.log("filterProductsBySize called with items: ", items);
    console.log("filterProductsBySize called with size: ", size);

    dispatch({
        type: FILTER_PRODUCTS_BY_SIZE,
        payload: {
            size: size,
            items: size === "ALL" ?
                items: items.filter(item => item.availableSizes.indexOf(size) >= 0)
        }
    })
};

export const sortProductsByPrice =  (items, sort) => (dispatch) => {
    console.log("sortProductsByPrice called with items: ", items);
    console.log("sortProductsByPrice called with sort: ", sort);

    const sortedItems = items.slice();
    sortedItems.sort((a, b) => {
        if (sort  === "lowest") {
            return a.price < b.price? -1:1;
        } else if (sort  === "highest") {
            return a.price < b.price? 1:-1;
        } else if (sort  === "latest") {
            return a._id < b._id? -1:1;
        } else if (sort  === "") {
            return 0;
        }
        else {
            console.error("Error in sortProducts");
            return 0;
        }
    });
    dispatch({
        type: SORT_PRODUCTS_BY_PRICE,
        payload: {
            sort: sort,
            items: sortedItems
        }
    });
}
