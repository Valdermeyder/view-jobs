import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {BrowserRouter} from 'react-router-dom'
import {applyMiddleware, combineReducers, createStore} from 'redux'
import {pathReducer} from './nav/pathReducers'
import {Provider} from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import {jobDetailsReducer, jobsReducer} from './job/jobReducers'
import {entityPaths} from './nav/pathConfiguration'

const preloadedState = window.__PRELOADED_STATE__ || {}
delete window.__PRELOADED_STATE__

const store = createStore(
	combineReducers({entityPaths: pathReducer, jobs: jobsReducer, job: jobDetailsReducer}),
	{...preloadedState, entityPaths},
	applyMiddleware(thunkMiddleware))

ReactDOM.render((
	<Provider store={store}>
		<BrowserRouter>
			<MuiThemeProvider>
				<App/>
			</MuiThemeProvider>
		</BrowserRouter>
	</Provider>
), document.getElementById('root'));
