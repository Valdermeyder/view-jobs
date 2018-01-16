import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import {MuiThemeProvider} from 'material-ui'
import {Provider} from 'react-redux'
import {combineReducers, createStore, applyMiddleware} from 'redux'
import {pathReducer} from './nav/pathReducers'
import thunkMiddleware from 'redux-thunk'
import {jobsReducer} from './job/jobReducers'
import {entityPaths} from './nav/pathConfiguration';

it('renders without crashing', () => {
	const div = document.createElement('div');
	const store = createStore(
		combineReducers({entityPaths: pathReducer, jobs: jobsReducer}),
		{entityPaths},
		applyMiddleware(thunkMiddleware)
	);
	ReactDOM.render(
		<Provider store={store}>
			<BrowserRouter>
				<MuiThemeProvider>
					<App/>
				</MuiThemeProvider>
			</BrowserRouter>
		</Provider>,
		div
	);
});
