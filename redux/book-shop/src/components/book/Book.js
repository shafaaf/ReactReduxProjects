import React from 'react';
import { connect } from 'react-redux';
import * as bookActions from '../../actions/bookActions';

class Book extends React.Component{
    constructor(props){
        // Pass props back to parent
        super(props);
    }

    // Submit book handler
    submitBook(input){
        alert('Submitted')
    }

    render(){
        // Title input tracker
        let titleInput;
        // return JSX
        return(
            <h1>Books Page</h1>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        // You can now say this.props.books
        books: state.books
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        // You can now say this.props.createBook
        createBook: book => dispatch(bookActions.createBook(book))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Book);

// export default Book;
