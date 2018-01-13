import React from 'react'
import JobDetails from "./JobDetails";
import {getJob} from "./jobsRetriever";

export default ({match}) => (
	<JobDetails job={getJob(match.params.jobId)}></JobDetails>
)