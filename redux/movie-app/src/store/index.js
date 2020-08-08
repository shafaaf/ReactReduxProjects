import {createStore, combineReducers} from 'redux';
import movieListReducer from './reducers/movieListReducer';

const reducer = combineReducers({movies: movieListReducer});

const initialState = {
    movies: {name: "TERMINATOR 2"}
};

const store = createStore(
    reducer, initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
