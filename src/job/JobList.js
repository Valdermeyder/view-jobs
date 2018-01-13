import React from 'react'
import {JobListItem} from "./JobListItem";
import {GridList, Subheader} from "material-ui";

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

export const JobList = ({jobs, jobsUrl}) => (
	<div style={styles.root}>
		<GridList
			cellHeight={180}
			style={styles.gridList}
		>
			<Subheader>Jobs</Subheader>
			{jobs.map(job => <JobListItem key={job.id} job={job} jobsUrl={jobsUrl}/>)}
		</GridList>
	</div>
)
