import React from 'react'

export const JobListItem = ({job}) => (
	<div>
		<h2>{job.title}</h2>
		<p>{job.location}</p>
		<a href={'job/' + job.id}>Details...</a>
	</div>
)
