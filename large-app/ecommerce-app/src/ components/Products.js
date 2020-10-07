import React, {Component} from 'react';
import formatCurrency from "../utils";
import Fade from 'react-reveal/Fade';
import ProductModal from "./ProductModal";

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productClickedOn: null
        };
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
                    <ul className="products">
                        {
                            this.props.products.map(product => (
                                <li key = {product._id}>
                                    <div className="product">
                                        <a href={"#" + product._id} onClick={() => this.openModal(product)}>
                                            <img src = {product.image} alt = {product.title}/>
                                            <p>{product.title}</p>
                                        </a>

                                        <div className="product-price">
                                            <div>{formatCurrency(product.price)}</div>
                                            <button onClick={() => this.props.addToCart(product)} className="button primary">Add to Cart</button>
                                        </div>

                                    </div>
                                </li>
                            ))
                        }
                    </ul>
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

export default Products;
