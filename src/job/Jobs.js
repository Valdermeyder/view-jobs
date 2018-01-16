import React, {Component} from 'react'
import {connect} from 'react-redux'
import JobList from './JobList'
import {fetchJobsAsync} from './jobActions'

class Jobs extends Component {
	componentWillMount() {
		this.props.fetchJobs()
	}

	render() {
		return <JobList/>
	}
}

const mapDispatchToProps = dispatch => ({
	fetchJobs: () => {
		dispatch(fetchJobsAsync())
	}
})

export default connect(null, mapDispatchToProps)(Jobs)