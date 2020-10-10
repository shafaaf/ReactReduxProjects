import React, {Component} from 'react';
import {connect} from "react-redux";
import { filterProductsBySize, sortProductsByPrice } from "../actions/productActions";

class Filter extends Component {
    render() {
        return !this.props.filteredItems ? (
            <div>Loading items...</div>
        ) : (
            <div className="filter">
                <div className="filter-result">{this.props.filteredItems.length} Products Available</div>

                <div className="filter-sort">
                    Sort{" "}
                    <select
                        value = {this.props.sort}
                        onChange={(e) => {
                            this.props.sortProductsByPrice(
                                this.props.filteredItems,
                                e.target.value
                            );
                        }
                        }
                    >
                        <option value="latest">Latest</option>
                        <option value="lowest">Lowest</option>
                        <option value="highest">Highest</option>
                    </select>
                </div>

                <div className="filter-size">
                    Filter{" "}
                    <select value = {this.props.size} onChange={this.props.filterProductsBySize}>
                        <option value="ALL">ALL</option>
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                    </select>
                </div>
            </div>
        );
    }
}

const MapStateToProps = (state) => {
    return {
        size: state.products.size,
        sort: state.products.sort,
        items: state.products.items,
        filteredItems: state.products.filteredItems
    };
};

const MapDispatchToProps = (dispatch) => {
    return {
        filterProductsBySize: () => dispatch(filterProductsBySize("s", 4)),
        sortProductsByPrice: (filteredItems, size) => dispatch(sortProductsByPrice(filteredItems, size))
    };
};

export default connect(MapStateToProps, MapDispatchToProps)(Filter);
