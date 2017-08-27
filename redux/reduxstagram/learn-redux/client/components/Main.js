import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
  render() {
    // console.log("this.props.children is: ", this.props.children);
    return (
      <div>
        <h1>
          <Link to="/">Reduxstagram</Link>
        </h1>
        {/* Pass down props from Main to child*/}
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
});

export default Main;
