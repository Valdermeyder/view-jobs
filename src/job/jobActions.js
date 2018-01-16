import {JOB_DETAILS_FETCH, JOB_DETAILS_RECEIVE, JOB_SELECTED, JOBS_FETCH, JOBS_RECEIVE} from './jobActionsAliases'
import {getJob, getAllJobs} from './jobsRetriever'

export const fetchJobs = () => ({type: JOBS_FETCH})
export const receiveJobs = (jobs) => ({type: JOBS_RECEIVE, jobs})

export const selectJob = jobId => ({type: JOB_SELECTED, jobId})
export const fetchJob = jobId => ({type: JOB_DETAILS_FETCH, jobId})
export const receiveJob = (jobId, jobDetails) => ({type: JOB_DETAILS_RECEIVE, jobId, jobDetails})

export const fetchJobDetailsAsync = jobId => dispatch => {
	dispatch(fetchJob(jobId))
	return getJob(jobId)
		.then(jobDetails =>
			dispatch(receiveJob(jobId, jobDetails)))
		.catch(error => console.debug(`Cannot retrieve job details for ${jobId}. Details: `, error))
}

export const fetchJobsAsync = () => dispatch => {
	dispatch(fetchJobs())
	return getAllJobs()
		.then((jobs) => dispatch(receiveJobs(jobs)))
		.catch(error => console.debug('Cannot retrieve jobs. Details: ', error))
}