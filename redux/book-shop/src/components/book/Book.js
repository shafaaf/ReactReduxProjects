import React from 'react';
import { connect } from 'react-redux';
import * as bookActions from '../../actions/bookActions';

class Book extends React.Component{
    constructor(props){
        super(props);
    }

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
        books: state.books
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        createBook: book => dispatch(bookActions.createBook(book))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Book);

// export default Book;
