import React from 'react'
import {Card, CardHeader} from 'material-ui'
import JobDescription from './JobDescription'
import {getJobDetails} from './jobSelectors'
import {connect} from 'react-redux'
import {textAlignCenter} from '../style/commonStyles'

const headerStyleAligner = {paddingLeft: 90};
const JobDetails = ({job = {description: {}}}) => (
	<Card>
		<CardHeader
			title={job.title}
			subtitle={job.location}
			titleStyle={headerStyleAligner}
			subtitleStyle={headerStyleAligner}
			style={textAlignCenter}
		/>
		{Object.keys(job.description).map((description) =>
			<JobDescription key={description} description={job.description[description]}/>)
		}
	</Card>
)

const mapStateToProps = state => ({
	job: getJobDetails(state)
})

export default connect(mapStateToProps)(JobDetails)
