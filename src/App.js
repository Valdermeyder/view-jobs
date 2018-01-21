import React, {Component} from 'react'
import Menu from './nav/Menu'
import Routes from './nav/Routes'
import {AppBar} from 'material-ui'
import {textAlignCenter} from './style/commonStyles'

class App extends Component {
	render() {
		return (
			<div>
				<header style={textAlignCenter}>
					<AppBar showMenuIconButton={false} title='Welcome to View Jobs'/>
				</header>
				<nav style={textAlignCenter}>
					<Menu/>
				</nav>
				<Routes/>
			</div>
		);
	}
}

export default App;
