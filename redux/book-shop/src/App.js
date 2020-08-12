import React  from 'react';
import { Link } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'

import Home from "./components/HomePage";
import Book from "./components/book/BookPage";

const App = (props) => {
    return (
        <div className="container">
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">Scotch Books</a>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/books">Book</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>

            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/books' component={Book}/>
            </Switch>

        </div>
    );
};

export default App;
