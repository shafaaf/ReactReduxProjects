import React from 'react';
import data from './data';
import Products from "./ components/Products";
import Filter from "./ components/Filter";
import Cart from "./ components/Cart";

import store from "./store";
import { Provider } from "react-redux";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: data.products,
            // read cart form storage if exists
            cartItems: localStorage.getItem("cartItems"  )? JSON.parse(localStorage.getItem("cartItems")) : [],
            // user selected
            size: "",
            sort: ""
        };
        console.log("products is: ", this.state.products);
    }

    removeFromCart = product => {
        const cartItems = this.state.cartItems.slice();
        this.setState({
            cartItems: cartItems.filter(x => x._id !== product._id)
        },() => {
            localStorage.setItem("cartItems", JSON.stringify(this.state.cartItems));
        });
    };

    addToCart = product => {
        const cartItems = this.state.cartItems.slice();
        let alreadyInCart = false;
        cartItems.forEach(item => {
            if (item._id === product._id) {
                item.count++;
                alreadyInCart = true;
            }
        });
        if (!alreadyInCart) {
            cartItems.push({...product, count: 1});
        }
        this.setState({
            cartItems
        },() => {
            localStorage.setItem("cartItems", JSON.stringify(this.state.cartItems));
        });
    };

    render() {
        return (
            <Provider store = {store}>
                <div className="App">
                    <div className="grid-container">
                        <header>
                            <a href="/">React Shopping Cart</a>
                        </header>
                        <main>
                            <div className="content">
                                <div className="main">
                                    <Filter/>
                                    <Products addToCart={this.addToCart}/>
                                </div>
                                <div className="sidebar">
                                    <Cart
                                        cartItems={this.state.cartItems}
                                        removeFromCart={this.removeFromCart}
                                    />
                                </div>
                            </div>
                        </main>

                        <footer>
                            All rights reserved.
                        </footer>

                    </div>
                </div>
            </Provider>
        );
    }
}

export default App;
