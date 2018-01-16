import React from 'react'
import {Redirect, Route, withRouter} from 'react-router-dom'
import {getEntityPath} from './pathSelector'
import {connect} from 'react-redux'
import Job from '../job/Job'
import Jobs from '../job/Jobs'

const jobIdParam = 'jobId';
const Routes = ({jobsPath}) => (
	<div>
		<Route path={jobsPath + '/:' + jobIdParam} render={({match}) => <Job jobId={match.params[jobIdParam]}/>}/>
		<Route exact path={jobsPath} component={Jobs}/>
		<Route exact path='/' render={() => <Redirect to={jobsPath}/>}/>
	</div>
)

const mapStateToProps = state => ({
	jobsPath: getEntityPath(state, 'job')
});

export default withRouter(connect(mapStateToProps)(Routes))