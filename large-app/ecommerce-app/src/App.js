import React from 'react';
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Link } from "react-router-dom";

import Products from "./ components/Products";
import Filter from "./ components/Filter";
import Cart from "./ components/Cart";

class App extends React.Component {
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
                                    <Products/>
                                </div>
                                <div className="sidebar">
                                    <Cart/>
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
