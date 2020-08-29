import React from 'react';
import data from './data';
import Products from "./ components/Products";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            products: data.products,
            // user selected
            size: "",
            sort: ""
        };
        console.log("products is: ", this.state.products);
    }
    render() {
        return (
            <div className="App">
                <div className="grid-container">
                    <header>
                        <a href="/">React Shopping Cart</a>
                    </header>
                    <main>
                        <div className="content">
                            <div className="main">
                                <Products products = {this.state.products}/>
                            </div>
                            <div className="sidebar">
                                Cart Items
                            </div>
                        </div>
                    </main>

                    <footer>
                        All rights reserved.
                    </footer>

                </div>
            </div>
        );
    }
}

export default App;
