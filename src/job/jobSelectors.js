export const getJobs = state => state.jobs.items || []

const getSelectedJob = job => job.jobDetailsById[job.selectedJob] || {}

export const getJobDetails = state =>
	getSelectedJob(state.job).jobDetails