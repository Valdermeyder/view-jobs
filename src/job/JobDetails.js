import React from 'react'
import {Card, CardHeader} from "material-ui";
import JobDescription from './JobDescription'

const headerStyleAligner = {paddingLeft: 90};
export default ({job = {}}) => (
	<div>
		<Card>
			<CardHeader
				title={job.title}
				subtitle={job.location}
				titleStyle={headerStyleAligner}
				subtitleStyle={headerStyleAligner}
			/>
			{Object.keys(job.description).map((description) =>
				<JobDescription key={description} description={job.description[description]}/>)
			}
		</Card>
	</div>
)
