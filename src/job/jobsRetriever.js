export const jobs = [
	{
		title: 'React Developer',
		location: 'Berlin',
		id: 1,
	},
	{
		title: 'Angular Developer',
		location: 'Krakow',
		id: 2
	}
]

export const getAllJobs = () => jobs

export const getJob = id =>
	jobs.find(job => job.id == id)
