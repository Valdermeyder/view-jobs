export const generateJob = index => ({
	title: 'Job Title ' + index,
	location: 'Location ' + index,
	img: 'http://via.placeholder.com/250x180',
	description: {
		about: {title: 'About project', text: 'Cool project ' + index},
		requirements: {title: 'Requirements', text: 'Skill ' + index}
	},
	id: index,
})

export const generateJobs = quantity => {
	const jobs = []
	for (let index = 1; index < quantity + 1; index++) {
		jobs.push(generateJob(index))
	}
	return jobs
}
