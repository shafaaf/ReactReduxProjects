import React, {Component} from 'react';
import formatCurrency from "../utils";
import Fade from 'react-reveal/Fade';
import ProductModal from "./ProductModal";

import {connect} from "react-redux";
import {fetchProducts} from '../actions/productActions'
import {addToCart} from "../actions/cartActions";


class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productClickedOn: null
        };
    }

    componentDidMount() {
        this.props.fetchProducts();
    }

    openModal = (productClickedOn) => {
        this.setState({
            productClickedOn
        });
    };

    closeModal = () => {
        this.setState({
            productClickedOn: null
        });
    };

    render() {
        const {productClickedOn} = this.state;
        const {addToCart} = this.props;
        return (
            <div>
                <Fade bottom cascade>
                    {
                        !this.props.filteredItems? <div>Loading..</div> : (
                        <ul className="products">
                            {
                                this.props.filteredItems.map(product => (
                                    <li key = {product._id}>
                                        <div className="product">
                                            <a href={"#" + product._id} onClick={() => this.openModal(product)}>
                                                <img src = {product.image} alt = {product.title}/>
                                                <p>{product.title}</p>
                                            </a>

                                            <div className="product-price">
                                                <div>{formatCurrency(product.price)}</div>
                                                <button onClick={() => addToCart(product, )} className="button primary">Add to Cart</button>
                                            </div>

                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                        )
                    }
                </Fade>
                {
                    productClickedOn &&
                    <ProductModal
                        productClickedOn = {productClickedOn}
                        addToCart = {addToCart}
                        openModal = {this.openModal}
                        closeModal = {this.closeModal}>
                    </ProductModal>
                }
            </div>
        );
    }
}

const MapStateToProps = (state) => {
    return {
        filteredItems: state.products.filteredItems
    };
};

const MapDispatchToProps = (dispatch) => {
    return {
        fetchProducts: () => dispatch(fetchProducts),
        addToCart: (newItem) => dispatch(addToCart(newItem))
    };
};

export default connect (MapStateToProps, MapDispatchToProps)(Products);
