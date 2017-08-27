import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';

// React router components
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

//Other components
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

ReactDOM.render(<Start/>, document.getElementById('container'));