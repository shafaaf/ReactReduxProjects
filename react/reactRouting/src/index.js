// https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf
// Use inspect element and see that things appear as they come up in the code with
// match object passed down on each match of route

import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

import {PlayerAPI} from './playerApi';

// ------------------ Routes ---------------------

const App = () => (
  <div>
    <Header />
    <Main />
  </div>
)

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/roster'>Roster</Link></li>
        <li><Link to='/schedule'>Schedule</Link></li>
      </ul>
    </nav>
  </header>
)

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/roster' component={Roster}/>
      <Route path='/schedule' component={Schedule}/>
    </Switch>
  </main>
)

const Roster = () => (
  <div>
    <h2>This is a roster page!</h2>
    <Switch>
      <Route exact path='/roster' component={FullRoster}/>
      <Route path='/roster/:number' component={Player}/>
    </Switch>
  </div>
)

// ---------------- Components --------------------

const Home = () => (
  <div>
    <h1>Welcome to the Tornadoes Website!</h1>
  </div>
)

const Schedule = () => (
  <div>
    <ul>
      <li>6/5 @ Evergreens</li>
      <li>6/8 vs Kickers</li>
      <li>6/14 @ United</li>
    </ul>
  </div>
)

const FullRoster = () => (
  <div>
    <ul>
      {
        PlayerAPI.all().map(p => (
          <li key={p.number}>
            <Link to={`/roster/${p.number}`}>{p.name}</Link>
          </li>
        ))
      }
    </ul>
  </div>
)

// For an indivitual player
const Player = (props) => {
	const player = PlayerAPI.get(
		parseInt(props.match.params.number, 10)
	)
	if (!player) {
		return <div>Sorry, but the player was not found</div>
	}
	return (
		<div>
			<h1>{player.name} (#{player.number})</h1>
			<h2>Position: {player.position}</h2>
		</div>
	)
}

// ---------------- Rendering --------------------

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'))
