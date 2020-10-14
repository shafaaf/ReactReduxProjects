import React, {Component} from 'react';
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";
import formatCurrency from "../utils";
import PropTypes from "prop-types";

class OrderModal extends Component {

    closeModal = () => {
        this.props.clearOrder();
    };

    render() {
        const {order} = this.props;
        return (
            <div>
                {Object.entries(order).length !== 0 && (
                    <Modal
                        isOpen={true}
                        onRequestClose={this.props.closeModal}
                        ariaHideApp={false}
                    >
                        <Zoom>
                            <button className="close-modal" onClick={this.closeModal}>
                                x
                            </button>
                            <div className="order-details">
                                <h3 className="success-message">Your order has been placed.</h3>
                                <h2>Order {order._id}</h2>
                                <ul>
                                    <li>
                                        <div>Name:</div>
                                        <div>{order.name}</div>
                                    </li>
                                    <li>
                                        <div>Email:</div>
                                        <div>{order.email}</div>
                                    </li>
                                    <li>
                                        <div>Address:</div>
                                        <div>{order.address}</div>
                                    </li>
                                    <li>
                                        <div>Date:</div>
                                        <div>{order.createdAt}</div>
                                    </li>
                                    <li>
                                        <div>Total:</div>
                                        <div>{formatCurrency(order.total)}</div>
                                    </li>
                                    <li>
                                        <div>Cart Items:</div>
                                        <div>
                                            {order.cartItems.map((x, key) => (
                                                <div key = {key}>
                                                    {x.count} {" x "} {x.title}
                                                </div>
                                            ))}
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </Zoom>
                    </Modal>
                )}
            </div>
        );
    }
}

OrderModal.propTypes = {
    order: PropTypes.object.isRequired,
    clearOrder: PropTypes.func.isRequired
};

export default OrderModal;
