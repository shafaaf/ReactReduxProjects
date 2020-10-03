import React from 'react';
import data from './data';
import Products from "./ components/Products";
import Filter from "./ components/Filter";
import Cart from "./ components/Cart";

class App extends React.Component {
    constructor() {
        super();
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
    }

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
    }

    sortProducts = e => { // sort filtered product list by size
        const sortBy = e.target.value;
        console.log("calling sortProducts: ", sortBy);
        this.setState({
            sort: sortBy,
            products: this.state.products.sort((a, b) => {
                if (sortBy  === "lowest") {
                    return a.price < b.price? -1:1;
                } else if (sortBy  === "highest") {
                    return a.price < b.price? 1:-1;
                } else if (sortBy  === "latest") {
                    return a._id < b._id? -1:1;
                }
            })
        });
    };

    filterProductsBySize = e => { // filter all products by size
        const size = e.target.value;
        console.log("calling filterProducts: ", size);

        if (size === "ALL") { // show all products
            console.log("All selected");
            this.setState({
                products: data.products
            });
        } else { // filter by some size
            this.setState({
                size: size,
                products: data.products.filter(product =>
                    product.availableSizes.indexOf(size) >= 0
                )
            });
        }
    };

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
                                <Filter
                                    count = {this.state.products.length}
                                    size = {this.state.size}
                                    sort = {this.state.sort}
                                    filterProductsBySize = {this.filterProductsBySize}
                                    sortProducts = {this.sortProducts}
                                />
                                <Products products = {this.state.products} addToCart = {this.addToCart}/>
                            </div>
                            <div className="sidebar">
                                <Cart cartItems = {this.state.cartItems}  removeFromCart = {this.removeFromCart}/>
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
