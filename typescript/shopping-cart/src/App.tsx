import React from 'react';
import {useState} from "react";
import {useQuery} from "react-query";

import {Drawer} from "@material-ui/core";
import {LinearProgress} from "@material-ui/core";
import {Grid} from "@material-ui/core";
import {Badge} from "@material-ui/core";
import {AddShoppingCart} from "@material-ui/icons";

// styles
import {Wrapper} from "./App.styles";

// Types

export type CartItemType = {
    id: number;
    category: string;
    description: string;
    image: string;
    price: number;
    title: string;
    amount: number; // TODO: This doesnt exist
};

const getProducts = async (): Promise<CartItemType[]> => {
    const data = await fetch('https://fakestoreapi.com/products');
    return data.json();
}

const App: React.FC = () => {
    const {data, isLoading, error} = useQuery<CartItemType[]>(
        'products',
        getProducts
    );
    console.log("data is: ", data);
    return (
        <div className="App">
            <p>Hi</p>
        </div>
    );
};

export default App;
