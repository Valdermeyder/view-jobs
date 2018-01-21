export const generateJob = index => ({
	title: 'Job Title ' + index,
	location: 'Location ' + index,
	img: 'https://placem.at/people?h=180&random=' + index,
	description: {
		about: {title: 'About project', text: 'Cool project ' + index},
		requirements: {title: 'Requirements', text: 'Skill ' + index}
	},
	id: index,
})

export const generateJobs = (quantity = Math.random() * 10) => {
	const jobs = []
	for (let index = 1; index < quantity + 1; index++) {
		jobs.push(generateJob(index))
	}
	return jobs
}
