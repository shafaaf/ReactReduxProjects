import React, {Component} from 'react';
import formatCurrency from "../utils";
import Form from "./Form";
import Fade from 'react-reveal/Fade';
import {connect} from "react-redux";
import {removeFromCart} from "../actions/cartActions";
import OrderModal from "./OrderModal";
import {clearOrder} from "../actions/orderActions";
import PropTypes from "prop-types";

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showCheckout: false
        }
    }

    render() {
        const {cartItems, order, clearOrder} = this.props;
        return (
            <div>
                {cartItems.length === 0? (
                    <div className="cart cart-header">Cart is empty</div>
                ) : (
                    <div className="cart cart-header">You have {cartItems.length} in the cart.</div>
                )}

                { order && (<OrderModal
                    order = {order}
                    clearOrder = {clearOrder}
                />)}
                <div>
                    <div className="cart">
                        <Fade left cascade>
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
                        </Fade>
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
                                <Form/>
                            )}
                        </div>

                    )}



                </div>
            </div>
        );
    }
}

const MapStateToProps = (state) => {
    return {
        cartItems: state.cart.cartItems,
        order: state.order.order
    };
};

const MapDispatchToProps = (dispatch) => {
    return {
        removeFromCart: (existingItems, itemToRemove) => dispatch(removeFromCart(existingItems, itemToRemove)),
        clearOrder: () => dispatch(clearOrder())
    };
};

Cart.propTypes = {
    cartItems: PropTypes.array.isRequired,
    order: PropTypes.object.isRequired,


    removeFromCart: PropTypes.func.isRequired,
    clearOrder: PropTypes.func.isRequired
};

export default connect(MapStateToProps, MapDispatchToProps)(Cart);

