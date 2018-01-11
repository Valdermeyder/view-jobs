import React from 'react'
import {JobListItem} from "./JobListItem";

export const JobList = ({jobs, jobsUrl}) => (
	<div>
		<h1>Jobs</h1>
		{jobs.map(job => <JobListItem key={job.id} job={job} jobsUrl={jobsUrl}/>)}
	</div>
)
