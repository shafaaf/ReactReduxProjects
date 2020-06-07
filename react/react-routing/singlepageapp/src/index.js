import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import App from './app';

class Start extends React.Component {
	render() {
		return(
			<Router>
				<div>
					<App/>
				</div>
			</Router>
		)
	}
}

ReactDOM.render(
	<Start/>,
	document.getElementById('root')
);
