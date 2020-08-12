import React  from 'react';
import { Link } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'

import Home from "./components/Home";
import Book from "./components/book/Book";
import About from "./components/common/AboutPage";

const App = (props) => {
    return (
        <div className="container">
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/books">Book</Link></li>
                            <li><Link to="/about">About</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>

            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/books' component={Book}/>
                <Route path='/about' component={About}/>
            </Switch>

        </div>
    );
};

export default App;
