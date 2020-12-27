import React from 'react';
import PropTypes from 'prop-types';

class ListItem extends React.Component {
    render() {
        const {item} = this.props;
        return <li className="item">{item}</li>;
    }
}

ListItem.propTypes = {
    item: PropTypes.string,
};

export default ListItem;
