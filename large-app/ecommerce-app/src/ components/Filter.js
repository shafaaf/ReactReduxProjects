import React, {Component} from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';

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
                    {/*
                    TODO: Need to allow selecting selection option again as error:
                        Select an sort option, filter to all sizes, then see sort order not matching
                    */}
                    <select
                        value = {this.props.sort}
                        onChange={(e) => {
                            this.props.sortProductsByPrice(
                                this.props.filteredItems,
                                e.target.value
                            );
                        }}
                    >
                        <option value="latest">Latest</option>
                        <option value="lowest">Lowest</option>
                        <option value="highest">Highest</option>
                    </select>
                </div>

                <div className="filter-size">
                    Filter{" "}
                    <select
                        value = {this.props.size}
                        onChange={(e) => {
                            this.props.filterProductsBySize(
                                this.props.items,
                                e.target.value
                            );
                        }}
                    >
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
        sortProductsByPrice: (filteredItems, sort) => dispatch(sortProductsByPrice(filteredItems, sort)),
        filterProductsBySize: (items, size) => dispatch(filterProductsBySize(items, size))
    };
};

Filter.propTypes = {
    size: PropTypes.string.isRequired,
    sort: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
    filteredItems: PropTypes.array.isRequired,
    sortProductsByPrice: PropTypes.func.isRequired,
    filterProductsBySize: PropTypes.func.isRequired
};

export default connect(MapStateToProps, MapDispatchToProps)(Filter);
