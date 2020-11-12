import React from 'react';
import PropTypes from 'prop-types';
import ListItem from "./ListItem";

export default class List extends React.Component {
    render() {
        const {items} = this.props;
        return (
            <ul className="list-items">
                {items.map(item => <ListItem key={item} item={item} />)}
            </ul>
        );
    }
}

List.propTypes = {
    items: PropTypes.array,
};

List.defaultProps = {
    items: [],
};
