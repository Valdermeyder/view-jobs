import {getAllJobs, getJob} from './jobsRetriever'
import {generateJobs, generateJob} from './jobGenerator'

jest.mock('./jobGenerator', () => ({
	generateJobs: jest.fn(),
	generateJob: jest.fn()
}))

describe('#getAllJobs', () => {
	let jobs

	beforeEach(() => {
		jobs = [{id: 1, title: 'React'}]
		generateJobs.mockReturnValue(jobs)
	})

	test('should generate 4 jobs', () =>
		getAllJobs().then(() => expect(generateJobs).toBeCalledWith(4)))

	test('should return generated jobs', () =>
		getAllJobs().then((receiveJobs) => expect(receiveJobs).toBe(jobs)))
})

describe('#getJob', () => {
	const id = 1
	let job

	beforeEach(() => {
		job = {id, title: 'React'}
		generateJob.mockReturnValue(job)
	})

	test('should return generated job', () =>
		getJob(id).then((receivedJob) => expect(receivedJob).toBe(job)))
})
