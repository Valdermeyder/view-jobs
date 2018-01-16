import React, {Component} from 'react'
import {connect} from 'react-redux'
import JobDetails from './JobDetails'
import {fetchJobDetailsAsync, selectJob} from './jobActions'

class Job extends Component {
	componentWillMount() {
		this.props.fetchJob()
	}

	render() {
		return <JobDetails/>
	}
}

const mapDispatchToProps = (dispatch, {jobId}) => ({
	fetchJob: () => {
		dispatch(selectJob(jobId))
		dispatch(fetchJobDetailsAsync(jobId))
	}
})

export default connect(null, mapDispatchToProps)(Job)