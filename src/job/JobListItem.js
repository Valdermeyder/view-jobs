import React from 'react'
import {Link} from 'react-router-dom'
import {GridTile} from 'material-ui'
import {getEntityPath} from '../nav/pathSelector'
import {connect} from 'react-redux'

const JobListItem = ({job, jobsUrl}) => (
	<Link to={jobsUrl + '/' + job.id}>
		<GridTile
			title={job.title}
			subtitle={<span>in <b>{job.location}</b></span>}
		>
			<img src={job.img} alt={job.title}/>
		</GridTile>
	</Link>
)

const mapStateToProps = state => ({
	jobsUrl: getEntityPath(state, 'job')
})

export default connect(mapStateToProps)(JobListItem)
