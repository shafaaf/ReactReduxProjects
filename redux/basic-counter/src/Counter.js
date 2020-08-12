import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
    return {
        count: state.count
    };
}

class Counter extends React.Component {

    increment = () => {
    };

    decrement = () => {
    };

    render() {
        return (
            <div style={{justifyContent:'center', alignItems:'center', height: '100vh'}}>
                <h2>Counter</h2>
                <br/>
                <button onClick={this.decrement}>-</button>
                <h3>{this.props.count}</h3>
                <button onClick={this.increment}>+</button>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Counter);
