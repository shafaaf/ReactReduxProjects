import React, { Component } from 'react';

// React router components
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'


//import other components
import Home from './home';
import Contact from './contact';
import Stuff from './stuff';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Simple SPA</h1>
        <ul className="header">
          <li><Link to="/" activeClassName="active">Home</Link></li>
          <li><Link to="/stuff" activeClassName="active">Stuff</Link></li>
          <li><Link to="/contact" activeClassName="active">Contact</Link></li>
        </ul>

        <div className="content">
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/stuff' component={Stuff}/>
            <Route exact path='/contact' component={Contact}/>
          </Switch>
        </div>
      </div>

    );
  }
}

export default App;
