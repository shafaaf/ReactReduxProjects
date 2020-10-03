import React, {Component} from 'react';

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            address: ""
        }
    }

    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value,});
    };

    createOrder = (e) => {
        e.preventDefault();
        this.props.createOrder(this.state.name, this.state.email, this.state.address);
    };

    render() {
        return (
            <div className = "cart">
                <form onSubmit = {this.createOrder}>
                    <ul className="form-container">
                        <li>
                            <label>Email</label>
                            <input
                                name="email"
                                type="email"
                                required
                                onChange={this.handleInput}>
                            </input>
                        </li>
                        <li>
                            <label>Name</label>
                            <input
                                name="name"
                                type="text"
                                required
                                onChange={this.handleInput}
                            />
                        </li>
                        <li>
                            <label>Address</label>
                            <input
                                name="address"
                                type="text"
                                required
                                onChange={this.handleInput}
                            />
                        </li>
                        <li>
                            <button className="button primary" type="submit">
                                Checkout
                            </button>
                        </li>
                    </ul>
                </form>
            </div>
        );
    }
}

export default Form;
