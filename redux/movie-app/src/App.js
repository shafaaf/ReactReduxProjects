import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import updateMovies from "./store/actions/updateMovies";

function App(props) {
    return (
        <div className="App">
            <h1>Redux Movielist App</h1>
            <br></br>
            <p>{props.movies.name}</p>
            <button onClick={props.updateMovies}>Click to update</button>
        </div>
    );
}

const MapStateToProps = (state) => {
    return {
        movies: state.movies
    };
};

const MapDispatchToProps = (dispatch) => {
    return {
        updateMovies: () => dispatch(updateMovies)
    };
};

export default connect(MapStateToProps, MapDispatchToProps)(App);
