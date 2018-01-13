import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Jobs from './job/Jobs'
import Job from './job/Job'
import {Route} from "react-router-dom";
import Menu from "./nav/Menu";

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
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo"/>
					<h1 className="App-title">Welcome to View Jobs</h1>
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
