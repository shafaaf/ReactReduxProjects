import React from 'react';
import { connect } from 'react-redux';

import { increment, decrement } from './actions';

function mapStateToProps(state) {
    return {
        count: state.count
    };
}

const mapDispatchToProps = {
    increment,
    decrement
};

class Counter extends React.Component {

    increment = () => {
        this.props.increment();
    };

    decrement = () => {
        this.props.decrement();
    };

    render() {
        return (
            <div style={{justifyContent:'center', alignItems:'center', height: '100vh'}}>
                <h2>Counter</h2>
                <br/>
                <button onClick={this.increment}>+</button>
                <h3>{this.props.count}</h3>
                <button onClick={this.decrement}>-</button>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
