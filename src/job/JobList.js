import React from 'react'
import JobListItem from './JobListItem'
import {GridList, Subheader} from 'material-ui'
import {getJobs} from './jobSelectors'
import {connect} from 'react-redux'
import {textAlignCenter} from '../style/commonStyles'

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
	subHeader: {
		...textAlignCenter,
		paddingLeft: 0
	}
}

const JobList = ({jobs}) => (
	<div style={styles.root}>
		<GridList
			cellHeight={180}
			style={styles.gridList}
		>
			<Subheader style={styles.subHeader}>Jobs</Subheader>
			{jobs.map(job => <JobListItem key={job.id} job={job}/>)}
		</GridList>
	</div>
)

const mapStateToProps = (state) => ({
	jobs: getJobs(state)
})

export default connect(mapStateToProps)(JobList)
