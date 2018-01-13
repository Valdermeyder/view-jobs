import React from 'react'
import {Link} from "react-router-dom";
import {GridTile} from "material-ui";

export const JobListItem = ({job, jobsUrl}) => (
	<Link to={jobsUrl + '/' + job.id}>
		<GridTile
			title={job.title}
			subtitle={<span>in <b>{job.location}</b></span>}
		>
			<img src={job.img} alt={job.title}/>
		</GridTile>
	</Link>
)
