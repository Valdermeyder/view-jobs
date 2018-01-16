import React from 'react'
import JobListItem from './JobListItem'
import {GridList, Subheader} from 'material-ui'
import {getJobs} from './jobSelectors'
import {connect} from 'react-redux'

const styles = {
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
	},
	gridList: {
		width: 500,
		overflowY: 'auto',
	},
}

const JobList = ({jobs}) => (
	<div style={styles.root}>
		<GridList
			cellHeight={180}
			style={styles.gridList}
		>
			<Subheader>Jobs</Subheader>
			{jobs.map(job => <JobListItem key={job.id} job={job}/>)}
		</GridList>
	</div>
)

const mapStateToProps = (state) => ({
	jobs: getJobs(state)
})

export default connect(mapStateToProps)(JobList)
