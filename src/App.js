import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {JobList} from "./job/JobList";
import {getAllJobs} from "./job/jobsRetriever";

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo"/>
					<h1 className="App-title">Welcome to View Jobs</h1>
				</header>
				<p className="App-intro">
					Simple mock up application to view jobs
				</p>
				<JobList jobs={getAllJobs()}/>
			</div>
		);
	}
}

export default App;
