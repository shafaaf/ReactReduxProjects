import React, {Component} from 'react';
import Fade from 'react-reveal/Fade'
import {connect} from "react-redux";
import {createOrder} from "../actions/orderActions";

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            address: ""
        }
    }

    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value,});
    };

    createOrder = (e) => {
        e.preventDefault();
        const order = {
            name: this.state.name,
            email: this.state.email,
            address: this.state.address,
            cartItems: this.props.cartItems,
            total: this.props.cartItems.reduce((a, c) => a + c.price * c.count, 0)
        };
        this.props.createOrder(order);
    };

    render() {
        return (
            <Fade right cascade>
                <div className = "cart">
                    <form onSubmit = {this.createOrder}>
                        <ul className="form-container">
                            <li>
                                <label>Email</label>
                                <input
                                    name="email"
                                    type="email"
                                    required
                                    onChange={this.handleInput}>
                                </input>
                            </li>
                            <li>
                                <label>Name</label>
                                <input
                                    name="name"
                                    type="text"
                                    required
                                    onChange={this.handleInput}
                                />
                            </li>
                            <li>
                                <label>Address</label>
                                <input
                                    name="address"
                                    type="text"
                                    required
                                    onChange={this.handleInput}
                                />
                            </li>
                            <li>
                                <button className="button primary" type="submit">
                                    Checkout
                                </button>
                            </li>
                        </ul>
                    </form>
                </div>
            </Fade>
        );
    }
}

const MapStateToProps = (state) => {
    return {
        cartItems: state.cart.cartItems
    };
};

const MapDispatchToProps = (dispatch) => {
    return {
        createOrder: (order) => dispatch(createOrder(order))
    };
};

export default connect(MapStateToProps, MapDispatchToProps)(Form);
