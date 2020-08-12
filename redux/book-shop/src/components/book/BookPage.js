import React from 'react';

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
            <h1>Books</h1>
        )
    }
}

export default Book;
