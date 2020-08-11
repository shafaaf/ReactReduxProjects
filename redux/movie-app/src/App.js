import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import updateMovies from "./store/actions/updateMovies";
import fetchUsers from "./store/actions/fetchUsers";

function App(props) {
    return (
        <div className="App">
            <h1>Redux Movielist App</h1>
            <br></br>
            <p>Your current movie is: {props.movies.name}</p>
            <button onClick={props.updateMovies}>Click to update</button>
            <br/>
            {
                props.users.length === 0 ?
                    <p>There are no users</p>:
                    props.users.map(user => <p key={user.id}>{user.first_name} - {user.email}</p>)
            }
            <br/>
            <button onClick={props.fetchUsers}>Click to fetch users</button>
        </div>
    );
}

const MapStateToProps = (state) => {
    return {
        movies: state.movies,
        users: state.users
    };
};

const MapDispatchToProps = (dispatch) => {
    return {
        updateMovies: () => dispatch(updateMovies),
        fetchUsers: () => dispatch(fetchUsers)
    };
};

export default connect(MapStateToProps, MapDispatchToProps)(App);
