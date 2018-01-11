import React from 'react'
import {getAllJobs} from "./jobsRetriever";
import {JobList} from "./JobList";

export default ({match}) => (
	<JobList jobs={getAllJobs()} jobsUrl={match.url}/>
)