export const jobs = [
	{
		title: 'React Developer',
		location: 'Berlin',
		img: 'http://via.placeholder.com/250x180',
		id: 1,
	},
	{
		title: 'Angular Developer',
		location: 'Krakow',
		img: 'http://via.placeholder.com/250x180',
		id: 2
	}
]

export const getAllJobs = () => jobs

export const getJob = id =>
	jobs.find(job => job.id == id)
