import Axios from 'axios';

export const createBookLocally = (book) => {
    return {
        type: 'CREATE_BOOK_LOCALLY',
        book: book
    }
};

export const fetchBooksSuccess = (books) => {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        books
    }
};

export const fetchBooks = () => {
    const apiUrl = 'https://599b99f43a19ba0011949be1.mockapi.io/books';
    // Returns a dispatcher function that dispatches an action at a later time
    return (dispatch) => {
        // Returns a promise
        return Axios.get(apiUrl)
            .then(response => {
                dispatch(fetchBooksSuccess(response.data))
            })
            .catch(error => {
                throw(error);
            });
    };
};
