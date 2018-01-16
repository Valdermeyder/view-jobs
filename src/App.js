import React, {Component} from 'react';
import './App.css';
import Menu from './nav/Menu';
import Routes from './nav/Routes'
import {AppBar} from 'material-ui';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<header>
					<AppBar showMenuIconButton={false} title='Welcome to View Jobs'/>
				</header>
				<nav>
					<Menu/>
				</nav>
				<Routes/>
			</div>
		);
	}
}

export default App;
