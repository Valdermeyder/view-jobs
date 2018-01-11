import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Jobs from './job/Jobs'
import Job from './job/Job'
import {Link, Route} from "react-router-dom";

const jobsPath = '/jobs'

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
					<Link to="/">Home</Link>
					<Link to="/jobs">Jobs</Link>
				</nav>
				<div>
					<Route path={jobsPath + "/:jobId"} component={Job}></Route>
					<Route exact path={jobsPath} component={Jobs}></Route>
					<Route exact path="/" component={Home}></Route>
				</div>
			</div>
		);
	}
}

export default App;
