import React from 'react';

class Counter extends React.Component {
    state = { count: 0 };

    increment = () => {
        this.setState({
            count: this.state.count + 1
        });
    };

    decrement = () => {
        this.setState({
            count: this.state.count - 1
        });
    };

    render() {
        return (
            <div style={{justifyContent:'center', alignItems:'center', height: '100vh'}}>
                <h2>Counter</h2>
                <br/>
                <button onClick={this.decrement}>-</button>
                <h3>{this.state.count}</h3>
                <button onClick={this.increment}>+</button>
            </div>
        )
    }
}

export default Counter;
