import React from 'react'
import {JobListItem} from "./JobListItem";

export const JobList = ({jobs}) => (
	<div>
		<h1>Jobs</h1>
		{jobs.map(job => <JobListItem key={job.id} job={job}/>)}
	</div>
)
