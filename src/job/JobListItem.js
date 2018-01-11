import React from 'react'
import {Link} from "react-router-dom";

export const JobListItem = ({job, jobsUrl}) => (
	<div>
		<h2>{job.title}</h2>
		<p>{job.location}</p>
		<Link to={jobsUrl + '/' + job.id}>Details...</Link>
	</div>
)
