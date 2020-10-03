import React, {Component} from 'react';
import formatCurrency from "../utils";
import Filter from "./Filter";
import Form from "./Form";

class Cart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showCheckout: false
        }
    }

    createOrder = (name, email, address) => {
        const order = {
            name, email, address
        };
        console.log("on createOrder on cart.js: ", order);
    };

    render() {
        const {cartItems} = this.props;

        return (
            <div>
                {cartItems.length === 0? (
                    <div className="cart cart-header">Cart is empty</div>
                ) : (
                    <div className="cart cart-header">You have {cartItems.length} in the cart.</div>
                )}
                <div>
                    <div className="cart">
                        <ul className="cart-items">
                            {cartItems.map((item) => (
                                <li key={item._id}>
                                    <div>
                                        <img src={item.image} alt={item.title}/>
                                    </div>
                                    <div>
                                        <div>{item.title}</div>
                                        <div className="right">
                                            {item.count} x {formatCurrency(item.price)} {"  "}
                                            <button
                                                className="button"
                                                onClick={() => this.props.removeFromCart(item)}>
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Show total only when there are cart items */}
                    {cartItems.length !== 0 && (
                        <div>
                            <div className="cart">
                                <div className="total">
                                    <div>
                                        Total: {" "}
                                        {formatCurrency(cartItems.reduce((a, c) => a + (c.price * c.count), 0))}
                                    </div>
                                    <button onClick={() => this.setState({showCheckout: true})}
                                            className="button primary">
                                        Proceed
                                    </button>
                                </div>
                            </div>
                            {this.state.showCheckout && (
                                <Form createOrder = {this.createOrder}/>
                            )}
                        </div>

                    )}



                </div>
            </div>
        );
    }
}

export default Cart;
