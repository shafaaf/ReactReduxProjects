import React, {Component} from 'react';
import Modal from 'react-modal';
import Zoom from "react-reveal/Zoom";
import formatCurrency from "../utils";
import PropTypes from "prop-types";

class ProductModal extends Component {
    render() {
        const {productClickedOn} = this.props;
        const {closeModal} = this.props;
        const {addToCart} = this.props;
        return (
            <Modal
                isOpen={true}
                onRequestClose={closeModal}
                ariaHideApp={false}>
                <Zoom>
                    <button
                        className="close-modal"
                        onClick={() => closeModal()}>
                        Close Modal
                    </button>

                    <div className="product-details">
                        <img src={productClickedOn.image} alt = {productClickedOn.title}/>
                        <div className="product-details-description">
                            <p><strong>{productClickedOn.title}</strong></p>
                            <p>{productClickedOn.description}</p>
                            <p>
                                Available Sizes:{" "}
                                {productClickedOn.availableSizes.map((x, key) => (
                                    <span key = {key}>{" "}
                                        <button className="button">{x}</button>
                                            </span>
                                ))}
                            </p>

                            <div className="product-price">
                                <div>{formatCurrency(productClickedOn.price)}</div>
                                <button
                                    className="button primary"
                                    onClick={() => {
                                        addToCart(productClickedOn);
                                        closeModal();
                                    }}>
                                    Add To Cart
                                </button>
                            </div>

                        </div>
                    </div>
                </Zoom>
            </Modal>
        );
    }
}

ProductModal.propTypes = {
    productClickedOn: PropTypes.object.isRequired,
    addToCart: PropTypes.func.isRequired,
    openModal: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired,
};

export default ProductModal;
