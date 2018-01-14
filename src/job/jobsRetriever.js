const jobGenerator = (quantity) => {
	const arr = []
	for (let index = 1; index < quantity + 1; index++) {
		arr.push({
			title: 'Job Title ' + index,
			location: 'Location ' + index,
			img: 'http://via.placeholder.com/250x180',
			description: {
				about: {title: 'About project', text: 'Cool project ' + index},
				requirements: {title: 'Requirements', text: 'Skill ' + index}
			},
			id: index,
		})
	}
	return arr
}

export const jobs = jobGenerator(4)

export const getAllJobs = () => jobs

export const getJob = id =>
	jobs.find(job => job.id == id)
