import React, {Component} from 'react';
import './App.css';
import Jobs from './job/Jobs'
import Job from './job/Job'
import {Route} from "react-router-dom";
import Menu from "./nav/Menu";
import {AppBar} from "material-ui";

const jobsPath = '/jobs'

const menuItems = [
	{
		path: '/',
		text: 'Home'
	},
	{
		path: jobsPath,
		text: 'Jobs'
	}
]

const Home = () => (
	<p className="App-intro">
		Simple mock up application to view jobs
	</p>
)

class App extends Component {
	render() {
		return (
			<div className="App">
				<header>
					<AppBar showMenuIconButton={false} title="Welcome to View Jobs"/>
				</header>
				<nav>
					<Menu menuItems={menuItems}/>
				</nav>
				<div>
					<Route path={jobsPath + "/:jobId"} component={Job}/>
					<Route exact path={jobsPath} component={Jobs}/>
					<Route exact path="/" component={Home}/>
				</div>
			</div>
		);
	}
}

export default App;
