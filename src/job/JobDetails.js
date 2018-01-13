import React from 'react'

export default ({job = {}}) => (
	<div>
		<h1>{job.title}</h1>
		<p>{job.location}</p>
	</div>
)
